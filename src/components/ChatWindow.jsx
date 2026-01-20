import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import styles from '../styles/ChatWindow.module.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: 'Hi! I can help you refine this document. What would you like to change?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      // Add user message
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        text: inputValue
      };

      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai',
          text: 'I understand your request. In a real implementation, I would process your refinement and update the document accordingly.'
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h3>Refine Document</h3>
        <p>Make changes and improvements to your content</p>
      </div>

      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${
              message.type === 'user' ? styles.userMessage : styles.aiMessage
            }`}
          >
            <div className={styles.messageContent}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <textarea
          className={styles.chatInput}
          placeholder="Ask me to refine the document..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          rows={3}
        />
        <button
          className={styles.sendButton}
          onClick={handleSend}
          disabled={!inputValue.trim()}
        >
          <IoSend className={styles.sendIcon} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
