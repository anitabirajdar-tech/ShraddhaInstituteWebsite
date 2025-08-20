import React, { useState, useEffect, useRef } from "react";
import "./Chatbox.css";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  function getCurrentTime() {
    const now = new Date();
    return (
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0")
    );
  }

  // Greeting shown when new chat starts
  const defaultGreeting = [
    { text: "Hello there! 👋", sender: "received", time: getCurrentTime() },
    {
      text: "Welcome to Shraddha Institute. How can we help you today?",
      sender: "received",
      time: getCurrentTime(),
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 🔹 Predefined FAQ responses
  const responses = {
    abacus:
      "We offer professional Abacus training to improve calculation speed and concentration.",
    vedic:
      "Our Vedic Math program helps children solve math faster with ancient techniques.",
    brain:
      "We provide Brain Development courses that boost memory, focus, and creativity.",
    online:
      "Yes! We provide both online and offline classes for flexibility.",
    demo:
      "Great choice 🎉 We are currently offering a FREE demo class. Would you like me to register you?",
    age: "We have batches for different age groups. Please share your child’s age to guide you better.",
    brochure:
      "We will send you our brochure via email. Could you please share your email address?",
    contact:
      "Our counselor will reach out to you shortly with full details.",
    counselor:
      "Our counselor will reach out to you shortly with full details.",
    fees:
      "Our course fees vary depending on the program. Would you like me to connect you with our counselor for details?",
    location:
      "We have multiple centers and also provide online classes 🌍. Please share your city so we can guide you better.",
    timing:
      "Our class timings are flexible, including weekdays and weekends. Which time suits you best?",
    thank:
      "🙏 Thank you for connecting with Shraddha Institute. We’ll get back to you soon.",
  };

  // 🔹 Smart reply function
  const getBotReply = (userMessage) => {
    const msg = userMessage.toLowerCase();

    for (let key in responses) {
      if (msg.includes(key)) {
        return responses[key];
      }
    }

    // Default fallback
    return "Thank you for your interest! Would you like to know about our Abacus, Vedic Math, or Brain Development courses?";
  };

  const handleSendMessage = (text = null) => {
    const messageText = text || inputValue;
    if (messageText.trim() === "") return;

    const newMessage = {
      text: messageText,
      sender: "sent",
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, newMessage]);
    if (!text) setInputValue("");

    // Simulate bot reply
    setIsTyping(true);
    setTimeout(() => {
      const replyMessage = {
        text: getBotReply(messageText),
        sender: "received",
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, replyMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // 🔹 Toggle chatbox → reset on close, greet on open
  const toggleChat = () => {
    if (isOpen) {
      setMessages([]); // Clear old chat
    } else {
      setMessages(defaultGreeting); // Start fresh
    }
    setIsOpen(!isOpen);
  };

  // 🔹 Quick reply buttons
  const quickReplies = ["Fees", "Timings", "Demo", "Location", "Brochure"];

  return (
    <div className="chatbox-container left-side">
      {/* Chat window */}
      <div className={`chatbox ${isOpen ? "active" : ""}`}>
        <div className="chat-header">
          Shraddha Institute
          <button className="close" onClick={toggleChat}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
              <div className="timestamp">{msg.time}</div>
            </div>
          ))}
          {isTyping && (
            <div className="message received typing">
              <p>Typing...</p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="quick-replies">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              className="quick-btn"
              onClick={() => handleSendMessage(reply)}
            >
              {reply}
            </button>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button onClick={() => handleSendMessage()}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* Floating toggle button */}
      <button className="chat-toggle" onClick={toggleChat}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-comment"}`}></i>
      </button>
    </div>
  );
};

export default Chatbox;
