const blogModal = require("../Modals/Blog.modal")

const GetAllBlogsController = async (req,res) => {
    const Blogs = await blogModal.find({})
    res.json({
        Blogsdata:Blogs,
        message: "Blog Fteched Successfully",
        status: 200
    })
}
module.exports=GetAllBlogsController