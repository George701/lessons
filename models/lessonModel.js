const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lessonSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  cover: {type: String, required: false},
}, { timestamps: true })

module.exports = mongoose.model('Lesson', lessonSchema)