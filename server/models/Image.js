const {Schema, model, ObjectId} = require('mongoose');

const Image = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    accessLink: {type:String},
    path: {type: String, default: ''},
    parent: {type: ObjectId, ref: 'Image'},
},
{collection: 'images'}
)

module.exports = model('Image', Image)