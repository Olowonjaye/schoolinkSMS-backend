const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: String,
  class: String,
  admissionNo: String,
  parent: {
    name: String,
    email: String
  }
  // add more fields as needed...
});
module.exports = mongoose.model('Student', studentSchema);
