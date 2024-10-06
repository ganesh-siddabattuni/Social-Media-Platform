const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        trim: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    likes: { 
        type: Number, 
        default: 0 
    },
    comments: [{ 
        text: { 
            type: String, 
            required: true 
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        }
    }],
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
