// App.js
import React, { useState } from 'react';
import { FaTelegramPlane, FaThumbsUp } from 'react-icons/fa';
import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: message,
        likes: 0,
        time: getCurrentTime() // Add timestamp to the message
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes++;
    setMessages(updatedMessages);
  };

  


  return (
    <div className="chat-container">
      <div className="message-thread">
        {messages.map((msg, index) => (
          <div className="message" key={index}>
            <div className="user-info">
              <div>
                <span className='first-letter'>{msg.user[0]}</span>
                <span className="username">{msg.user}</span>
              </div>
              <span className="time">{msg.time}</span>
            </div>
            <div className="text">{msg.text}</div>
            <div className="interactions">
              <button onClick={() => handleLike(index)}>
                <FaThumbsUp />
              </button>
              <span className="like-count">{msg.likes}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="input-box">
        <input type="text"
          value={message} 
          onChange={handleInputChange} 
          placeholder="Type a message..."
        />
        <FaTelegramPlane className="send-icon" onClick={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
