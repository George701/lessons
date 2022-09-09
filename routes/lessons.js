const express = require("express")
const {
  getLessons,
  getLesson,
  createLesson,
  deleteLesson,
  updateLesson,
} = require('../controllers/lessonController')

const router = express.Router()

// Get all lessons
router.get('/', getLessons)

// GET a single lesson
router.get('/:id', getLesson)

// POST a lesson
router.post('/', createLesson)

// DELETE a lesson
router.delete('/:id', deleteLesson)

// UPDATE a lesson
router.patch('/:id', updateLesson)

module.exports = router