const {Schema, model, ObjectId} = require('mongoose');

const Post = new Schema(
{
    text: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    image: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: 'User',
    },
    likes: [
      {
        type: Number,
        default: 0,
      },
    ]},
    {collection: 'posts'}
    )

    module.exports = model('Post', Post)