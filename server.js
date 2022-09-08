const express = require("express")
require('dotenv').config()

const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.get("/", (req, res) => {
  res.send("Welcome to the homepage")
})

app.get("/admin", (req, res) => {
  res.send("This is the top secret admin page")
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})