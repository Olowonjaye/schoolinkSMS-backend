// ============================================
// 🔌 DB CONNECTION (MongoDB + Mongoose)
// ============================================

const mongoose = require('mongoose');
require('dotenv').config(); // Load from .env

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('MONGODB_URI is not defined in .env');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit app if DB fails to connect
  }
};

module.exports = connectDB;

