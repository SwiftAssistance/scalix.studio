// File: /backend/server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const geminiRoutes = require('./gemini.js'); // This imports your gemini.js file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON data and allow requests from your website
app.use(cors());
app.use(express.json());

// Tell the server to use the rules from gemini.js for any path that starts with /api
app.use('/api', geminiRoutes);

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
