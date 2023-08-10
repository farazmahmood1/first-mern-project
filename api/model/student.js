const mongoose = require('mongoose')

// creating schema for the data of the student
const studentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:Number,
    gender:String
})

module.exports = mongoose.model('Student', studentSchema)