// routes/results.js

const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// ✅ Test route to verify the route is up
router.get('/', (req, res) => {
  res.json({ message: 'Results route is working' });
});

// 📝 Save student results
router.post('/', async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (err) {
    console.error('❌ Failed to save result:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 📚 Get results by admission number
router.get('/:admissionNo', async (req, res) => {
  try {
    const studentResult = await Result.findOne({ admissionNo: req.params.admissionNo });
    if (!studentResult) {
      return res.status(404).json({ error: 'Result not found' });
    }
    res.json(studentResult);
  } catch (err) {
    console.error('❌ Failed to fetch result:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
