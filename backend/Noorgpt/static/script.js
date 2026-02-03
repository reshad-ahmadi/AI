const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(role, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}-message`;

    // Simple check for code blocks
    if (text.includes('```')) {
        const parts = text.split('```');
        text = parts.map((part, index) => {
            if (index % 2 === 1) {
                return `<pre><code>${part.trim()}</code></pre>`;
            }
            return part;
        }).join('');
        messageDiv.innerHTML = text;
    } else {
        messageDiv.innerText = text;
    }

    chatDisplay.appendChild(messageDiv);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function showLoading() {
    const loaderDiv = document.createElement('div');
    loaderDiv.className = 'message bot-message loading-placeholder';
    loaderDiv.innerHTML = `
        <div class="skeleton" style="width: 80%;"></div>
        <div class="skeleton" style="width: 60%; margin-top: 10px;"></div>
    `;
    chatDisplay.appendChild(loaderDiv);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
    return loaderDiv;
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage('user', message);
    userInput.value = '';

    const loader = showLoading();

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        });

        const data = await response.json();
        loader.remove(); // Remove skeleton

        if (data.response) {
            appendMessage('bot', data.response);
        } else {
            appendMessage('bot', "SYSTEM ERROR: Uplink compromised.");
        }
    } catch (error) {
        loader.remove();
        appendMessage('bot', "CONNECTION ERROR: Terminal offline.");
    }
}

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Focus input on load
window.onload = () => {
    userInput.focus();
};
