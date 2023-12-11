const BlogModel = require('../Modals/Blog.modal')
const GetBlogController = async (req, res) => {

    try {
        const BlogExists = await BlogModel.exists({ _id: req.params.blogId })

        if (!BlogExists) {
            res.json({
                message: "No blog Found",
                status: 404
            })
        } else {
            const blogData = await BlogModel.findById(BlogExists._id)
            res.json({
                BlogData: blogData,
                message: "Blog Found",
                status: 200
            })
        }
    } catch (error) {
        res.json({
            message: "No blog Found",
            status: 404
        })
    }
}
module.exports = GetBlogController