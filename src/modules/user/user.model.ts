const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
    },
    passwordHash: {
        type: String,
        required: true
    }
},{timestamps:true})

export const UserModel = mongoose.model('users', userSchema);