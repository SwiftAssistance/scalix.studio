require('dotenv').config();
const express = require('express');
const axios = require('axios');

const router = express.Router();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// POST /api/gemini
router.post('/', async (req, res) => {
    const { prompt } = req.body;
    if (!GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key not configured." });
    }
    try {
        // Example Gemini API request
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
            { contents: [{ parts: [{ text: prompt }] }] },
            { headers: { "x-goog-api-key": GEMINI_API_KEY } }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
