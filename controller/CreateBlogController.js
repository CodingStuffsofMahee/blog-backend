const BlogModel = require('../Modals/Blog.modal')


const CreateBlogController = async (req, res) => {
    const BlogExists = await BlogModel.exists({ blogName: req.body.blogName })
    if (BlogExists===null) {
        
        BlogModel.create({
            blogName: req.body.blogName,
            blogImage: req.body.blogImage,
            blogContent: req.body.blogContent,
            blogCategory: req.body.blogCategory,
            blogCreationDate: req.body.blogCreationDate
       })
        res.send({
            message: 'Blog Created Successfully',
            status:200
        })
    } else {
        res.send({
            message: 'Blog already Exists',
            status:400
        })
    }
}

module.exports=CreateBlogController