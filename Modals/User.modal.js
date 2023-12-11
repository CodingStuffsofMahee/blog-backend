const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type:String
    },
    password:{
        type:String
    }
},{ timestamps: { createdAt: 'created_at' } })
const userModal = mongoose.model('users', UserSchema)
module.exports = userModal