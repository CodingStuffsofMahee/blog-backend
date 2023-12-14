const express = require('express')
const cors = require('cors')
const CreateBlogController=require('../controller/CreateBlogController')
const GetBlogController = require('../controller/GetBlogController')
const GetAllBlogsController = require('../controller/GetAllBlogsController')
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const createBlogsRouter = express.Router()
// createBlogsRouter.use(bodyParser.urlencoded({ extended: true }))
createBlogsRouter.post('/create',upload.none(),cors(),CreateBlogController)
createBlogsRouter.get('/allblogs/:blogId',cors(),GetBlogController)
createBlogsRouter.get('/allblogs/',cors(),GetAllBlogsController)

module.exports=createBlogsRouter