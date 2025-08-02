// models/Student.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  admissionNo: {
    type: String,
    required: true,
    unique: true,
  },
  class: {
    type: String,
    required: true,
  },
  gender: String,
  dob: Date,
  state: String,
  lga: String,
  photo: String, // optional: base64 string or image URL
  parent: {
    name: String,
    email: String,
    phone: String,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
