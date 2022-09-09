const express = require("express")

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
router.post('/', (req, res) => {
  res.json({mssg: 'POST new lesson'})
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