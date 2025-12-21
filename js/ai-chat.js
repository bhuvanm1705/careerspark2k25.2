
document.addEventListener('DOMContentLoaded', () => {
    // Create Chat Widget UI
    const chatWidget = document.createElement('div');
    chatWidget.innerHTML = `
      <div id="ai-chat-icon" style="position: fixed; bottom: 20px; right: 20px; width: 60px; height: 60px; background-color: #007bff; border-radius: 50%; box-shadow: 0 4px 8px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 1000;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </div>
  
      <div id="ai-chat-window" style="position: fixed; bottom: 90px; right: 20px; width: 350px; height: 500px; background-color: white; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); display: none; flex-direction: column; z-index: 1000; overflow: hidden; font-family: 'Source Sans Pro', sans-serif;">
        <div style="background-color: #007bff; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center;">
          <h4 style="color: white; margin: 0; font-size: 16px;">CareerSpark AI Assistant</h4>
          <span id="close-chat" style="cursor: pointer; font-size: 20px;">&times;</span>
        </div>
        <div id="chat-messages" style="flex: 1; padding: 15px; overflow-y: auto; background-color: #f9f9f9;">
          <div style="background-color: #e9ecef; color: #333; padding: 10px; border-radius: 10px; margin-bottom: 10px; max-width: 80%;">
             Hello! I'm your AI Career Assistant. How can I help you today?
          </div>
        </div>
        <div style="padding: 10px; border-top: 1px solid #ddd; display: flex;">
          <input type="text" id="chat-input" placeholder="Ask about careers, courses..." style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 5px; outline: none;">
          <button id="send-chat" style="background-color: #007bff; color: white; border: none; padding: 10px 15px; margin-left: 10px; border-radius: 5px; cursor: pointer;">Send</button>
        </div>
      </div>
    `;
    document.body.appendChild(chatWidget);

    // Logic
    const chatIcon = document.getElementById('ai-chat-icon');
    const chatWindow = document.getElementById('ai-chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendChat = document.getElementById('send-chat');
    const chatMessages = document.getElementById('chat-messages');

    chatIcon.addEventListener('click', () => {
        chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
        if (chatWindow.style.display === 'flex') chatInput.focus();
    });

    closeChat.addEventListener('click', () => {
        chatWindow.style.display = 'none';
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.style.padding = '10px';
        msgDiv.style.borderRadius = '10px';
        msgDiv.style.marginBottom = '10px';
        msgDiv.style.maxWidth = '80%';
        msgDiv.style.wordWrap = 'break-word';

        if (sender === 'user') {
            msgDiv.style.backgroundColor = '#007bff';
            msgDiv.style.color = 'white';
            msgDiv.style.marginLeft = 'auto';
        } else {
            msgDiv.style.backgroundColor = '#e9ecef';
            msgDiv.style.color = '#333';
        }

        msgDiv.innerText = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function handleChat() {
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        chatInput.value = '';

        // Simulate AI typing
        const typingDiv = document.createElement('div');
        typingDiv.innerText = 'Typing...';
        typingDiv.style.fontSize = '12px';
        typingDiv.style.color = '#888';
        typingDiv.style.marginLeft = '15px';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Mock Response for now (Real integration would call Gemini API)
        setTimeout(() => {
            chatMessages.removeChild(typingDiv);
            let response = "That's an interesting question! As a demo agent, I suggest checking our 'Explore' page for more details.";

            if (text.toLowerCase().includes("python")) {
                response = "Python is a great language to start with! We have a dedicated Python course in our Learning section.";
            } else if (text.toLowerCase().includes("job") || text.toLowerCase().includes("career")) {
                response = "The job market is evolving. Key trends include AI, Data Science, and Renewable Energy. Check out the 'Market Trends' section.";
            }

            addMessage(response, 'bot');
        }, 1000);
    }

    sendChat.addEventListener('click', handleChat);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChat();
    });
});
