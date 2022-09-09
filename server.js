const express = require("express")
require('dotenv').config()

const app = express()
const mongoose = require('mongoose')
const lessonRouter = require('./routes/lessons')

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/lessons', lessonRouter)

// connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on port ${process.env.PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })