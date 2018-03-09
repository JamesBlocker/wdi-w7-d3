const mongoose = require('mongoose')
//set schema to regulate database entries
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    enrolled: Boolean
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student