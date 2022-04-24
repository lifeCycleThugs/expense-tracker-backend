const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required: true,
        
    },
    passwordHash: {
        type: String,
        required:true
    },
    phoneNumber: {
        type: Number,
        required:true
    }
},{timestamps:true})