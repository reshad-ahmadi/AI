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

app.listen(PORT, () => {
    console.log(`[SYSTEM] Backend Node listening on port ${PORT}`);
});
