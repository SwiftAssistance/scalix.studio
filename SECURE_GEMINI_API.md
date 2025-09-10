# Secure Handling of Gemini API Key

**Never expose your Gemini API key in frontend code. Always use a backend.**

## Setup

1. Copy `.env.example` to `.env` and add your Gemini API key.
2. Place `backend/gemini.js` in your backend server code.
3. `npm install express axios dotenv` to install dependencies.
4. In your main server file (e.g., `server.js`):
    ```js
    const express = require('express');
    const geminiRouter = require('./backend/gemini');
    const app = express();
    app.use(express.json());
    app.use('/api/gemini', geminiRouter);
    app.listen(3000, () => console.log('Server running on port 3000'));
    ```
5. On the frontend, POST your Gemini prompt to `/api/gemini` instead of directly to Google's API.

## Why?
- **Security:** Your API key is never exposed to users.
- **Control:** You can add rate limits, logging, or other features easily.

---