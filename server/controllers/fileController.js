const User = require("../models/User")
const Uuid = require("uuid")
const fs = require('fs')
const config = require('config')

const SERVER_URL = "localhost:7777/"

class FileController{
    async uploadAvatar(req,res) {
        try {

            
            console.log(req.file)
            const file = req.file;
            

            const user = await User.findById(req.user.id)
            const avatarName = req.file.filename;
            user.avatar = avatarName;
            await user.save();
            return res.json({
                avatarlink:`${SERVER_URL}${avatarName}`
            })
        } catch (e) {
            console.log(e);
            return res.status(400).json({message: "Server error"})
        }
    }
}

module.exports = new FileController();