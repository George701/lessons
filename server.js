const express = require("express")
require('dotenv').config()

const app = express()
const lessonRouter = require('./routes/lessons')

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/lessons', lessonRouter)

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})