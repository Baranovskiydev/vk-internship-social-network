const Post = require("../models/Post");
const User = require("../models/User")
const config = require('config')

const SERVER_URL = config.get('serverURL')

class postController {
    async addPost(req,res){
        try {
            
            const text = req.body.text;
            const image = req.file.filename

            const user = await User.findById(req.user.id);
            const post = new Post({text: text, username: user.name,image: image, user:user._id})
            await post.save()
            user.posts.push(post._id);
            await user.save()

            return res.status(200).json({message:'Post created'})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message:"Server Error"})
        }
    }
    async deletePost(req,res){
        try {
            
            const {post_id} = req.body;
            const user = await User.findById(req.user.id);

            user.posts.map((val) => {
                if(val.toString() !== post_id){
                    return val;
                }
            })
            await Post.deleteOne({_id: post_id});
            await user.save()

            return res.status(200).json({message:'Post deleted'})


        } catch (e) {
            console.log(e)
            return res.status(400).json({message:"Server Error"})
        }
    }
    async getPostsbyUser(req,res){
        try {
            const {user_id} = req.body;
            const user = await User.findById(user_id);

            if(!user){
                return res.status(400).json({message:"User not found"})
            }
            const posts = await Post.find({user: user._id});

            return res.status(200).json({
                posts
            })

        } catch (e) {
            console.log(e)
            return res.status(400).json({message:"Server Error"})
        }
    }
    async getAllPosts(req,res){
        try {
            const posts = await Post.find();

            return res.status(200).json({
                posts
            })

        } catch (e) {
            console.log(e)
            return res.status(400).json({message:"Server Error"})
        }
    }
}

module.exports = new postController();