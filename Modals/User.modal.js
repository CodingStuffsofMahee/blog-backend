const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type:String
    },
    username: {
        type:String
    },
    password:{
        type:String
    },
    email: {
        type:String
    },
    profileUrl: {
        type:String
    }
},{ timestamps: { createdAt: 'created_at' } })
const userModal = mongoose.model('users', UserSchema)
module.exports = userModal