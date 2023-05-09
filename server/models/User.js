const {Schema, model, ObjectId} = require('mongoose');

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, default: "Username"},
    surname: {type: String, default: "Usersurname"},
    age: {type: Number, default: 0},
    city: {type: String, default: "London"},
    university: {type: String, default: "University of VK"},
    avatar: {type: String},
    posts:[{type: ObjectId, ref:"Post"}],
    friends: [{type: ObjectId, ref:"User"}]
},
{collection: 'users'}
)

module.exports = model('User', User)