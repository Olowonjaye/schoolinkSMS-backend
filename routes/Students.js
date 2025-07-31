const router = require('express').Router();
const Student = require('../models/Student');

router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});

router.get('/:class', async (req, res) => {
  const list = await Student.find({ class: req.params.class });
  res.json(list);
});

module.exports = router;
