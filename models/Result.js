const mongoose = require('mongoose');
const resultSchema = new mongoose.Schema({
  studentId: mongoose.Types.ObjectId,
  class: String,
  subjects: mongoose.Schema.Types.Mixed
});
module.exports = mongoose.model('Result', resultSchema);
