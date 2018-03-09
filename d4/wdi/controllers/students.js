const Student = require('../models/Student.js')

module.exports = {
    index: (req, res) => {
        Student.find({}, (err, allDemStudents) => {
            if(err) return console.log(err)
            res.json(allDemStudents)
        })
    },

    show: (req, res) => {
        Student.findById(req.params.id, (err, thatStudent) => {
            if(err) return console.log(err)
            res.json(thatStudent)
        })
    },

    create: (req, res) => {
        const newStudent = new Student()
        newStudent.name = req.body.name
        newStudent.age = req.body.age
        newStudent.enrolled = req.body.enrolled
        newStudent.save((err, brandNewStudent) => {
            if(err) return console.log(err)
            res.json({ success: true, message: "Student created" })
        })
    },

    update: (req, res) => {
        Student.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedStudent) => {
          if(err) return console.log(err)
          res.json(updatedStudent)
        })
    },

    destroy: (req, res) => {
        Student.findByIdAndRemove(req.params.id, (err, thatStudent) => {
            if(err) return console.log(err)
            res.json({"deleted": true, thatStudent})
        })
    } 
}