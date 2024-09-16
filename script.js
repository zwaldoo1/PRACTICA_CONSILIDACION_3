document.addEventListener('DOMContentLoaded', () => {
  const conversations = document.querySelectorAll('.conversation');
  const chatMessages = document.getElementById('chat-messages');
  const chatUsername = document.getElementById('chat-username');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const currentProfilePic = document.getElementById('current-profile-pic');


  const chats = {
      1: [
          { sender: 'Carlos López', message: 'Hola, ¿cómo te puedo ayudar?', time: '10:15 AM', type: 'received' },
          { sender: 'Tú', message: 'Necesito soporte con un producto.', time: '10:16 AM', type: 'sent' }
      ],
      2: [
          { sender: 'Ana Pérez', message: '¿Puedes ayudarme con mi cuenta?', time: 'Ayer', type: 'received' }
      ],
      3: [
          { sender: 'David González', message: 'Tengo problemas con la entrega de un pedido.', time: '9:30 AM', type: 'received' }
      ],
      4: [
          { sender: 'Laura Romero', message: 'Estoy interesada en un producto.', time: '3:45 PM', type: 'received' }
      ],
      5: [
          { sender: 'Pedro Martínez', message: '¿Cuándo llegará mi pedido?', time: '11:00 AM', type: 'received' }
      ]
  };


  function loadChat(chatId) {
      chatMessages.innerHTML = '';
      const chatData = chats[chatId];


      const selectedConversation = document.querySelector(`.conversation[data-chat="${chatId}"]`);
      const profileImg = selectedConversation.dataset.img;
      currentProfilePic.src = profileImg;

      chatData.forEach(msg => {
          const messageElement = document.createElement('div');
          messageElement.classList.add('message', msg.type);
          messageElement.innerHTML = `<p>${msg.message}</p><span class="message-time">${msg.time}</span>`;
          chatMessages.appendChild(messageElement);
      });
  }


  conversations.forEach(conv => {
      conv.addEventListener('click', () => {
          const chatId = conv.dataset.chat;
          const contactName = conv.querySelector('.conversation-name').textContent;
          chatUsername.textContent = contactName;
          loadChat(chatId);
      });
  });


  sendButton.addEventListener('click', () => {
      const messageText = messageInput.value.trim();
      if (messageText) {
          const newMessage = document.createElement('div');
          newMessage.classList.add('message', 'sent');
          newMessage.innerHTML = `<p>${messageText}</p><span class="message-time">Ahora</span>`;
          chatMessages.appendChild(newMessage);
          messageInput.value = ''; 
      }
  });
});
document.querySelector('.menu-button').addEventListener('click', function() {
    const conversationList = document.querySelector('.conversation-list');
    conversationList.style.display = conversationList.style.display === 'none' ? 'block' : 'none';
});
