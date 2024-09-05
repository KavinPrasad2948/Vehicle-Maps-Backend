const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

// Load JSON data
const paths = require('./data/path.json');
const stops = require('./data/stops.json');

// Enable CORS for cross-origin requests
app.use(cors());

const port = 5000;

// Route to get paths data
app.get('/api/paths', (req, res) => {
  res.json(paths); // Send JSON data directly
});

// Route to get stops data
app.get('/api/stops', (req, res) => {
  res.json(stops); // Send JSON data directly
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
