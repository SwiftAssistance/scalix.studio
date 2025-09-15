// File: /backend/gemini.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');

const router = express.Router();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Corrected the path to '/gemini-proxy' to match what the front-end is calling.
router.post('/gemini-proxy', async (req, res) => {
    
    // Corrected the variable to look for 'userQuery' from the request body.
    const { userQuery } = req.body;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key not configured." });
    }

    // Check if userQuery was actually provided by the front-end.
    if (!userQuery) {
        return res.status(400).json({ error: "No userQuery provided in the request." });
    }

    try {
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
            {
                // Use the 'userQuery' variable in the API call.
                contents: [{ parts: [{ text: userQuery }] }]
            },
            {
                headers: { "x-goog-api-key": GEMINI_API_KEY }
            }
        );
        
        // The Gemini API response is complex; we need to extract the text part.
        const text = response.data.candidates[0].content.parts[0].text;
        res.json({ text }); // Send back a simple JSON object with the text.

    } catch (error) {
        // It's better to log the detailed error on the server for debugging.
        console.error("Error calling Gemini API:", error.response ? error.response.data : error.message);
        
        // And send a more generic error message to the client.
        res.status(500).json({ error: "Failed to get a response from the AI." });
    }
});

module.exports = router;
