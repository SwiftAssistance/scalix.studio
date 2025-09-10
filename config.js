// --- API & Configuration Settings ---
// IMPORTANT: Do not share secret keys publicly. Handle sensitive keys securely via backend or environment variables.

const config = {
    // Web3Forms Access Key (safe to be public)
    WEB3FORMS_ACCESS_KEY: "bc6fb5fc-82e9-4564-91f9-960547acb045",

    // Google Gemini API Key (should NOT be exposed in frontend code)
    // Use environment variable or backend proxy to securely access your API key.
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || ""
};
