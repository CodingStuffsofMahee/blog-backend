const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const CreateBlogController=require('../controller/CreateBlogController')
const GetBlogController = require('../controller/GetBlogController')
const GetAllBlogsController = require('../controller/GetAllBlogsController')

const createBlogsRouter = express.Router()
createBlogsRouter.use(bodyParser.urlencoded({ extended: true }))
createBlogsRouter.post('/create',cors(),CreateBlogController)
createBlogsRouter.get('/allblogs/:blogId',cors(),GetBlogController)
createBlogsRouter.get('/allblogs/',cors(),GetAllBlogsController)

module.exports=createBlogsRouter