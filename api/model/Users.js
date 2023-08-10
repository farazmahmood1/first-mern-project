const mongoose = require('mongoose')

userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    phone:Number,
    email:String,
    userType:String
})

modules.exports = mongoose.model('user', userSchema);