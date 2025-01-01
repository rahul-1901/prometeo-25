import React, { useEffect, useState } from 'react';
import botChat from "../assets/logo.gif";
import man from "../assets/dashboard/profileFace.webp";
import girl from "../assets/dashboard/queen.png";
import { API_BASE_URL } from "../config";
import useAxios from '../context/UseAxios';
import saga from "../assets/chatBot/saga.png";
import './Chatbot.css';
import TypingEffect from './TypingEffect';

const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot', isTyping: false}
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const api = useAxios();
  const [userImage, setUserImage] = useState({});
  const [isLive, setIsLive] = useState(true);

  const apiResponse = async (prompt) => {
    try {
      const response = await fetch('https://verified-jaguar-champion.ngrok-free.app/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "prometeo_iter4",
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
      console.error('error',error.message);
      throw error;
    }
  };
  
  const userAsk = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;


    setMessages((prev) =>
      prev.map((msg) =>
        msg.sender === 'bot' && msg.isTyping
          ? { ...msg, isTyping: false }
          : msg
      )
    );

    const userMessage = {
      text: inputMessage,
      sender: 'user',
      isTyping: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    try {
      const data = await apiResponse(inputMessage);
      const botMessage = {
        text: data.response || 'services not available, please try some time later',
        sender: 'bot',
        isTyping: true,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLive(true);
    } catch (error) {
      console.error('Chat Error:', error.message);
      const errorMessage = {
        text: 'services not available, please try some time later',
        sender: 'bot',
        isTyping: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsLive(false);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   const userPic = async () => {
  //     const responses = await api.get(`${API_BASE_URL}accounts/userdata/`);
  //     if (responses.status === 200) {
  //       setUserImage(responses.data);
  //     } else {
  //       console.log("notImage");
  //     }
  //   };
  //   userPic();
  // }, []);


  const handleTypingComplete = (index) => {
    setMessages(prev => prev.map((msg, i) => 
      i === index ? { ...msg, isTyping: false } : msg
    ));
  };

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-toggle flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chat-header">
            <div className='saga_header'></div>
            <div className='saga_title'>
              <p className='saga_name'>Saga</p>
              {isLive ?
                (<p className='online'> <span className='liveDots'>&#11044;</span>Online</p>) :
                (<p className='online text-red-600'> <span className='liveDots'>&#11044;</span>Offline</p>)
              }
            </div>
          </div>

          <div className='messages'>
            {messages.map((message, index) => (
              <div key={message.id || index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'} ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`message-content inline-block max-w-[80%] rounded-2xl ${message.sender === 'user' ? 'rounded-br-none': 'rounded-bl-none'}`}>
                  {/* <span className="bot">
                    {message.sender === 'bot' ? (
                      <img
                        src={botChat}
                        className="botImage w-9"
                      />
                    ) : (
                      <img
                        src={userImage.gender === 'Female' ? girl : man}
                        className='userImage'
                      />
                    )}
                  </span> */}
                  {message.sender === 'bot' && message.isTyping ? (
                    <TypingEffect 
                      text={message.text} 
                      onComplete={() => handleTypingComplete(index)}
                    />
                  ) : (
                    <div className='whitespace-pre-wrap break-words messagePara'>{message.text}</div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot-message">
                <div className="message-contents loading rounded-bl-none rounded-2xl">
                  {/* <span className="bot">
                    <img
                      src={botChat}
                      className="botImage"
                    />
                  </span>
                  <div className="loading-box"></div> */}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={userAsk} className="userInput">
       
            <input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me Anything"
            />
            <button type="submit" disabled={isLoading}>➤</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;