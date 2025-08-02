// models/Result.js

const mongoose = require('mongoose');

const subjectScoreSchema = new mongoose.Schema({
  ca1: { type: Number, default: 0 },
  ca2: { type: Number, default: 0 },
  exam: { type: Number, default: 0 },
}, { _id: false });

const resultSchema = new mongoose.Schema({
  admissionNo: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  subjects: {
    type: Map,
    of: subjectScoreSchema,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Result', resultSchema);
