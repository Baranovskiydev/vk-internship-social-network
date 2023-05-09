const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config")
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");


class authController{
    async registration (req, res){
        try{
            console.log("Запрос пришёл");
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Uncorrect request", errors})
            }
    
            const {email, password} = req.body;
    
            const suspect = await User.findOne({email});
    
            if (suspect){
                return res.status(400).json({message: `User with email ${email} already exist`})
            }
            const hashPassword = await bcrypt.hash(password, 5);
            const user = new User({email, password: hashPassword});
    
            await user.save();
            return res.json({message: "User was created"})
    
        }catch(e){
            console.log(e);
            res.send("Server error");
        }
    }
    async login (req, res){
        try{
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user){
                return res.status(404).json({message:"User not found"})
            }
    
            const isPassValid = bcrypt.compareSync(password, user.password);
            if(!isPassValid){
                return res.status(400).json({message:"Invalid password"})
            }

            //generate token
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "99999h"} )
    
            return res.json({
                token,
                user
            })
        }catch(e){
            console.log(e);
            res.send("Server error");
        }
    }
    async auth (req, res){
        try{
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "99999h"} )
    
            return res.json({
                token,
                user
            })
        }catch(e){
            console.log(e);
            res.send("Server error");
        }
    }
}

module.exports = new authController();