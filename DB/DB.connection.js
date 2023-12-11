const dotenv=require("dotenv")
dotenv.config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('connected', () => {
    console.log("Connected to mongoose");
})
db.on('error', (err) => {
    console.log("Error",err);
})
db.on('disconnected', () => {
    console.log("Disconnected to mongoose");
}) 