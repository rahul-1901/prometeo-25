import React, { useEffect, useState } from 'react';
import botChat from "../assets/logo.gif";
import man from "../assets/dashboard/profileFace.webp";
import girl from "../assets/dashboard/queen.png";
import { API_BASE_URL } from "../config";
import useAxios from '../context/UseAxios';
import './Chatbot.css';

const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);;
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const api = useAxios();
  const [userImage, setUserImage] = useState({});


  const apiResponse = async (prompt) => {
    try {
      const response = await fetch('https://verified-jaguar-champion.ngrok-free.app/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "prometeo",
          prompt: prompt,
          stream: false,
        }),
      });

      const data = await response.json();

      if (!data?.response) {
        throw new Error('response error');
      }
      return data;

    } catch (error) {
      console.error('error', error.message);
      throw error;
    }
  };

  const userAsk = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    setIsLoading(true);
    try {
      const data = await apiResponse(inputMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: data.response || 'services not available, please try some time later',
        sender: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat Error:', error.message);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'services not available, please try some time later',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const userPic = async () => {
      const responses = await api.get(`${API_BASE_URL}accounts/userdata/`);
      if (responses.status === 200) {
        setUserImage(responses.data);
      } else {
        console.log("notImage");
      }
    };
    userPic();
  }, []);

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'x' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chat-header">
            <h3>Chat Assistant</h3>
          </div>

          <div className="messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                <div className="message-content">
                  <span className="bot">
                    {message.sender === 'bot' ? (
                      <img
                        src={botChat}
                        className="botImage"
                      />
                    ) : (
                      <img
                        src={userImage.gender === 'Female' ? girl : man}
                        className='userImage'
                      />
                    )}
                  </span>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message">
                <div className="message-content loading">
                  <span className="bot">
                    <img
                      src={botChat}
                      className="botImage"
                    />
                  </span>
                  <div className="loading-box"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={userAsk} className="userInput">
            <input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message.."
            />
            <button type="submit" disabled={isLoading}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;