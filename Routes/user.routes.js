const express=require('express')
const LoginController = require('../controller/LoginController')
const SignupController = require('../controller/SignupController')
const userRouter = express.Router()

userRouter.post('/login',LoginController)
userRouter.post('/signup',SignupController)


module.exports=userRouter