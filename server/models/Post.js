const {Schema, model, ObjectId} = require('mongoose');

const Post = new Schema(
{
    text: { type: String, required: true },
    username: { type: String, required: true },
    avatar: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public',
    },
    image: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: 0,
      },
    ]},
    {collection: 'posts'}
    )

    module.exports = model('Post', Post)