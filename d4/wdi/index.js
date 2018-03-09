// web framework
const express = require('express')
const app = express()
// object document mapping (odm)
const mongoose = require('mongoose')
// user made module
const Student = require('./models/Student.js')
const bodyParser = require('body-parser')
const logger = require('morgan')
const studentsRouter = require('./routes/students.js')
const PORT = 3000

mongoose.connect('mongodb://localhost/wdi', (err) => {
    console.log(err || "Connected to MongoDB")
})

// middle wear, functions that run after request before response
//makes data available in views via req.body
app.use(bodyParser.json())
app.use(logger('dev'))

// Routes
// root
app.get("/", (req, res) => {
    res.json({ message: "API root." })
})

// All the students routes
app.use('/api/students', studentsRouter)

// Server Running
app.listen(PORT, (err) => {
    console.log(err || `Server running on port ${PORT}`)
})