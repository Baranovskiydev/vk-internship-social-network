const {Schema, model, ObjectId} = require('mongoose');

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String},
    surname: {type: String},
    age: {type: Number,},
    city: {type: String},
    university: {type: String},
    avatar: {type: ObjectId, ref:"Image"},
    posts:[{type: ObjectId, ref:"Post"}],
    friends: [{type: ObjectId, ref:"User"}]
})

module.exports = model('User', User)