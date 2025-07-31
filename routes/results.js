const router = require('express').Router();
const Result = require('../models/Result');

router.post('/', async (req, res) => {
  const result = new Result(req.body);
  await result.save();
  res.status(201).json(result);
});

router.get('/:studentId', async (req, res) => {
  const data = await Result.find({ studentId: req.params.studentId });
  res.json(data);
});

module.exports = router;
