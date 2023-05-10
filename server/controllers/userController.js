const User = require("../models/User")
const config = require('config')

const SERVER_URL = config.get('serverURL')

class userController{
    async getUser(req,res) {
        try {
            const id = req.id;
            const user = await User.findById(id);
            console.log(user);

            if(!user){
                res.status(404).json({message:"User not found"})
            }

            return res.status(200).json({
                user
            })

        } catch (e) {
            console.log(e);
            return res.status(400).json({message: "Server Error"})
        }
    }
    async findUsers(req,res) {
        try {
            const {name} = req.body;
            const users = await User.find({name: name});

            return res.json({
                users
            })

        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Server Error"})
        }
    }
    async addFriend(req,res){
        try {
            const {friend_email} = req.body;

            const user = await User.findById(req.user.id);
            const friend = await User.findOne({friend_email});

            user.friends.push(friend._id);

            await user.save();

            res.status(200).json({message: "Friend added"})


        } catch (error) {
            return res.status(400).json({message: "Server Error"})
        }
    }
    async removeFriend(req,res){
        try {
            const {friend_email} = req.body;

            const user = await User.findById(req.user.id);
            const friend = await User.findOne({friend_email});

            user.friends = user.friends.map((val) => {
                if(val.toString() !== friend._id.toString()){
                    return val;
                }
            })
            console.log(user.friends);
            await user.save();

            res.status(200).json({message: "Friend removed"})
        } catch (error) {
            return res.status(400).json({message: "Server Error"})
        }
    }
    async editUser(req,res){
        try {
            const user = await User.findById(req.user.id);
            user.name = req.body.name ?? user.name;
            user.surname = req.body.surname ?? user.surname;
            user.age = req.body.age ?? user.age;
            user.city = req.body.city ?? user.city;
            user.university = req.body.university ?? user.university;

            await user.save()
            return res.status(200).json({message:"User have been edited"})
        } catch (error) {
            
        }
    }
}

module.exports = new userController();