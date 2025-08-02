const cors = require('cors');
app.use(cors());
require('dotenv').config();
const express = require('express');


const app = express();


app.use(express.json());

app.use('/api/students', require('./routes/Students'));
app.use('/api/results', require('./routes/results'));

app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`✅ Server running at: http://localhost:${port}`);
});
