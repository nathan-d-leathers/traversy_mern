const express = require('express')
const router = express.Router()

module.exports = router

// CRUD Routes

// CREATE API data
router.post('/',(req,res) => {
    res.status(200).json({message: 'Set your Goal'})
})

// READ API data
router.get('/',(req,res) => {
    res.status(200).json({message: 'Get Your Goals'})
})

// UPDATE API data
router.put('/:id',(req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})

// DELETE API data
router.get('/:id',(req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})