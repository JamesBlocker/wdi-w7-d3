const express = require('express')
const studentsRouter = new express.Router()
const studentsCtrl = require('../controllers/students.js')
const Student = require('../models/Student.js')

//short hand way of below routes
studentsRouter.route("/")
    .get(studentsCtrl.index)
    .post(studentsCtrl.create)

studentsRouter.route("/:id")
    .get(studentsCtrl.show)
    .patch(studentsCtrl.update)
    .delete(studentsCtrl.destroy)

// // list all students
// studentsRouter.get("/", studentsCtrl.index)

// // create new student
// // uses body-parser
// studentsRouter.post("/", studentsCtrl.create)

// // show single student
// // params is stuff in url
// studentsRouter.get("/:id", studentsCtrl.show)

// // delete route: DELETE "/api/students/:id
// // use mongood to findByIdAndRemove a student"
// studentsRouter.delete("/:id", studentsCtrl.destroy)

// // patch route: PATCH "/api/students/:id"
// studentsRouter.patch("/:id", studentsCtrl.update)
    
module.exports = studentsRouter