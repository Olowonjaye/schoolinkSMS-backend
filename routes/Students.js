// routes/Students.js

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// ✅ Test route to verify the route is up
router.get('/', (req, res) => {
  res.json({ message: 'Students route is working' });
});

// 📝 Add new student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    console.error('❌ Failed to save student:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 📚 Get students by class
router.get('/:class', async (req, res) => {
  try {
    const list = await Student.find({ class: req.params.class });
    res.json(list);
  } catch (err) {
    console.error('❌ Failed to fetch students:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
