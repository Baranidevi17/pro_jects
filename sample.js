document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText !== '') {
        const messagesList = document.getElementById('messagesList');
        
        const newMessage = document.createElement('li');
        newMessage.textContent = messageText;
        
        messagesList.appendChild(newMessage);
        messageInput.value = '';
    }
});
