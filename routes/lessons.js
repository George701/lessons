const express = require("express")
const Lesson = require('../models/lessonModel')

const router = express.Router()

// Get all lessons
router.get('/', (req, res) => {
  res.json({mssg: 'GET lessons'})
})

// GET a single lesson
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET single lesson'})
})

// POST a lesson
router.post('/', async (req, res) => {
  const { title, description } = req.body

  try {
    const lesson = await Lesson.create({ title, description })
    res.status(200).json(lesson)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// DELETE a lesson
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a lesson'})
})

// UPDATE a lesson
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a lesson'})
})

module.exports = router