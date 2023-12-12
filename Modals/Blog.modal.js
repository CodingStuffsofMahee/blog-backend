const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    blogName: {
        type: String
    },
    blogImage: {
        type: String
    },
    blogContent: {
        type: String
    },
    blogCreationDate: {
        type: String
    },
    blogCategory: {
        type: String
    },
    blogLikes: {
        type: String,
        default:0
    },
    blogComments: {
        type: [String],
    }
})
const blogModal = mongoose.model('Blogs', BlogSchema)
module.exports = blogModal