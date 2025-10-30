import React, { useState } from 'react';
import Header from './components/layout/Header';
import ChatArea from './components/chat/ChatArea';
import MessageInput from './components/chat/MessageInput';
import AuthModal from './components/auth/AuthModal';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [messages, setMessages] = useState([]);

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleCloseAuth = () => {
    setShowAuthModal(false);
  };

  const handleSendMessage = (message) => {
    // Add user message
    setMessages([...messages, { text: message, isUser: true }]);
    
    // TODO: Send to API and get response
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'This is a simulated response. Connect to your backend API for real responses.', 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header onOpenAuth={handleOpenAuth} />
      <ChatArea messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={handleCloseAuth}
        initialMode={authMode}
      />
    </div>
  );
}

export default App;