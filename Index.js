// Load environment variables first
require('dotenv').config();

// Import required packages
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', require('./routes/Students'));
app.use('/api/results', require('./routes/results'));

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`✅ Server running at: http://localhost:${port}`);
});
