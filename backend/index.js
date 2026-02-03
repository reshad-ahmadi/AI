const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('CipherX Backend Protocol Active');
});

// Example Auth Route
app.post('/api/auth/establish', (req, res) => {
    const { neuralId, securityKey } = req.body;
    console.log(`Auth request for: ${neuralId}`);
    // Simulate successful link
    res.json({ success: true, message: 'Neural link established', token: 'cipherx_token_v4' });
});

const Groq = require("groq-sdk");

// AI Chat Endpoint with Groq
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    console.log(`AI Query: ${message}`);
    
    try {
        const GROQ_API_KEY = process.env.GROQ_API_KEY;
        
        if (!GROQ_API_KEY || GROQ_API_KEY === 'your_groq_api_key_here') {
            return res.json({
                reply: "I'm running in demo mode. To get real AI responses, add your Groq API key to the .env file. Get one free at https://console.groq.com/keys",
                status: 'demo_mode',
                latency: '0ms'
            });
        }

        const groq = new Groq({ apiKey: GROQ_API_KEY });
        
        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: "user", content: message }],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
        });

        const aiReply = chatCompletion.choices[0]?.message?.content || "I couldn't generate a response.";
        
        res.json({ 
            reply: aiReply,
            status: 'stable',
            latency: Math.floor(Math.random() * 300) + 100 + 'ms'
        });
    } catch (error) {
        console.error('AI Error:', error);
        res.status(500).json({ 
            reply: "I'm having trouble connecting. Please check your API key or internet connection.",
            status: 'error',
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`[SYSTEM] Backend Node listening on port ${PORT}`);
});
