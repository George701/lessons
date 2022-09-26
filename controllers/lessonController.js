const Lesson = require('../models/lessonModel')
const mongoose = require('mongoose')

// get all lessons
const getLessons = async (req, res) => {
  const lessons = await Lesson.find({}).sort({createdAt: -1})
  res.status(200).json(lessons)
  // const lessons = await Lesson.find({ title: 'Test'})
}

// get a single lesson
const getLesson = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such lesson'})
  }

  const lesson = await Lesson.findById(id)

  if (!lesson) {
    return res.status(404).json({error: 'No such lesson'})
  }

  res.status(200).json(lesson)
}

// create new lesson
const createLesson = async (req, res) => {
  const { title, description, cover } = req.body
  // add doc to db
  try {
    const lesson = await Lesson.create({ title, description, cover })
    res.status(200).json(lesson)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a lesson
const deleteLesson = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such lesson'})
  }

  const lesson = await Lesson.findOneAndRemove({_id: id})

  if (!lesson) {
    return res.status(400).json({error: 'No such lesson'})
  }

  res.status(200).json(lesson)
}

// update a lesson
const updateLesson = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such lesson'})
  }

  const lesson = await Lesson.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!lesson) {
    return res.status(400).json({error: 'No such lesson'})
  }

  res.status(200).json(lesson)
}

module.exports = {
  getLessons,
  getLesson,
  createLesson,
  deleteLesson,
  updateLesson,
}