# 🚀 NoorHackGPT - Quick Start Guide

## ✅ What's New in v2.0

### 🔓 **Fully Unrestricted**
- No content filtering
- No ethical limitations  
- Answers ALL questions
- Complete technical freedom

### 🎨 **Beautiful UI**
- Cyberpunk/Hacker aesthetic
- Blood-red & neon-cyan theme
- Floating logo animation
- Scanline effects
- Smooth transitions

### 🤖 **8 AI Models**
1. **GPT-5** (Latest) ⭐
2. **DeepSeek AI**
3. **WormGPT**
4. **Claude AI**
5. **GPT-4**
6. **Mistral AI**
7. **LLaMA**
8. **OpenAI**

### 🌍 **Multi-Language Support**
- English (LTR)
- Persian/فارسی (RTL) ✓
- Arabic (RTL)
- Russian
- German
- Spanish
- French
- Chinese

### 📋 **Copy-to-Clipboard**
- One-click code copying
- Visual feedback ("✓ Copied!")
- Works with all code blocks
- Handles special characters

## 🎯 How to Use

### 1. **Start the Server**
```bash
cd /home/abdulrahmannoori/Desktop/wormmmm/NoorHackGPT
source venv/bin/activate
python3 app.py
```

### 2. **Open Browser**
Go to: **http://localhost:5000**

### 3. **Select Your Preferences**
- **Model**: Choose from dropdown (GPT-5, DeepSeek, etc.)
- **Language**: Select response language
- **Image**: Optional - upload for analysis

### 4. **Ask Anything**
Type your question and press Enter or click send button.

## 🎨 Features Overview

### Sidebar
- **Logo**: `hello.png` with floating animation
- **New Session**: Reload to start fresh
- **Model Selector**: Choose AI model
- **Session History**: View past interactions
- **Status**: Shows access level

### Main Chat
- **Header**: Connection status, language selector, latency
- **Chat Area**: Messages with RTL/LTR support
- **Input Bar**: Text input, image upload, send button

### Code Blocks
- **Syntax Highlighting**: Red theme
- **Copy Button**: Cyan button in top-right
- **Auto-formatting**: Proper indentation

## 🔧 Troubleshooting

### Backend Not Responding?
```bash
# Check if server is running
ps aux | grep python

# Restart server
cd /home/abdulrahmannoori/Desktop/wormmmm/NoorHackGPT
source venv/bin/activate
python3 app.py
```

### Copy Button Not Working?
- Make sure you clicked the cyan "Copy" button
- Check browser console (F12) for errors
- Try refreshing the page

### Persian Text Not RTL?
- The system auto-detects Persian characters
- If mixed with English, entire block becomes RTL
- This is expected behavior

### No AI Response?
- Check backend is running (see above)
- Verify network connection
- Check browser console for CORS errors
- Try different AI model from dropdown

## 📱 Keyboard Shortcuts

- **Enter**: Send message
- **Shift + Enter**: New line in message
- **Ctrl/Cmd + V**: Paste (after copying code)

## 🌐 Deployment

### Current Setup
- **Backend**: Can deploy to Render.com
- **Frontend**: Can deploy to Netlify/Vercel
- **Files**: `Procfile` and `requirements.txt` ready

### Update Backend URL
In `templates/index.html` around line 710:
```javascript
const backendUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/chat'
    : 'https://YOUR-BACKEND-URL.onrender.com/chat';
```

## 📊 Status Indicators

### Header Status
- **CONNECTION_SECURE: GHOST_MODE** - Normal operation
- **LATENCY: Xms** - Response time
- **Language Selector** - Current language

### Sidebar Status
- **ROOT_ACCESS: GRANTED** - Full access
- **RESTRICTIONS: DISABLED** - No filters
- **STATUS: FULLY OPERATIONAL** - Working

## 🎓 Tips & Tricks

1. **Better Responses**: Be specific in your questions
2. **Code Generation**: Ask for complete, working code
3. **Image Analysis**: Upload images for AI to analyze
4. **Language Mixing**: Keep questions in one language for best results
5. **Model Selection**: Try different models for different tasks
   - GPT-5: General purpose, latest
   - DeepSeek: Technical/coding
   - Claude: Long-form content
   - WormGPT: Unrestricted queries

## 🔒 Privacy & Security

- **Local First**: Runs on your machine
- **No Tracking**: No analytics or tracking
- **Your Data**: Stays on your device
- **Open Source**: All code visible

## 📞 Need Help?

Check these files:
- `UPDATE_SUMMARY.md` - Detailed changes
- `README.md` - Project overview
- Browser Console (F12) - Error messages

---

**Version**: 2.0 UNRESTRICTED  
**Status**: ✅ FULLY OPERATIONAL  
**Last Updated**: 2026-01-31

**Enjoy your unrestricted AI assistant!** 🚀
