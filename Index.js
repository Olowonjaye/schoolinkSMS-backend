// ============================================
// 🛠️ IMPORTS & CONFIG
// ============================================
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load env early
const connectDB = require('./db'); // ✅ Handles MongoDB connection

const app = express();

// ============================================
// 🔌 CONNECT TO DATABASE
// ============================================
connectDB();

// ============================================
// 🌐 MIDDLEWARE
// ============================================
app.use(cors());
app.use(express.json());

// ============================================
// 📦 ROUTES
// ============================================
app.use('/api/students', require('./routes/Students'));
app.use('/api/results', require('./routes/results'));

app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// ============================================
// 🚀 START SERVER
// ============================================
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
