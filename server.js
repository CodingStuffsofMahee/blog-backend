require('./DB/DB.connection')
const express=require('express')
const dotenv=require("dotenv")
dotenv.config();
const cors=require('cors')
const CreateBlogsRouter = require('./Routes/Blogs.routes');
const UserRouter = require('./Routes/user.routes');



const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/', cors(), CreateBlogsRouter)
app.use('/api/account',cors(), UserRouter)



const port = process.env.PORT || 8000
app.get('/', (req, res) => {
    res.json({
        message: 'Working',
        status:200
    })
})
app.listen(port, () => {
    console.log('Server Chalu Ho gya hai ',port)
})