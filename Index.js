const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', require('./routes/students'));
app.use('/api/results', require('./routes/results'));

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
