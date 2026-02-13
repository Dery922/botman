// src/components/chat/ChatWidget.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Bot, 
  Sparkles,
  Minimize2,
  Maximize2,
  Send
} from 'lucide-react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: '👋 Hi there! Welcome to BotForge. How can I help you build your WhatsApp bot today?',
      timestamp: new Date(),
      status: 'read'
    },
    {
      id: 2,
      type: 'bot',
      content: 'I can help you with:',
      timestamp: new Date(),
      status: 'read'
    }
  ]);

  const quickReplies = [
    { id: 1, text: '💰 Pricing', icon: 'Sparkles' },
    { id: 2, text: '🚀 Features', icon: 'Zap' },
    { id: 3, text: '📚 Documentation', icon: 'Book' },
    { id: 4, text: '💬 Live Demo', icon: 'Play' }
  ];

  // Simulate typing effect
  React.useEffect(() => {
    if (isOpen && !isMinimized) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            type: 'bot',
            content: 'Would you like to see a demo of our WhatsApp bot platform?',
            timestamp: new Date(),
            status: 'delivered'
          }]);
        }, 2000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMinimized]);

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          
          {/* Main Button */}
          <div className="relative w-16 h-16 glass rounded-full flex items-center justify-center border-2 border-white/20 group-hover:border-white/40 transition-all">
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <>
                <MessageCircle size={28} className="text-white" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Sparkles size={12} className="text-white" />
                </div>
              </>
            )}
          </div>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '80px' : '600px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            className="fixed bottom-24 right-6 w-[380px] md:w-[450px] z-50 glass-dark shadow-2xl overflow-hidden rounded-3xl border border-white/10"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Header */}
            <div className="relative px-6 py-5 border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Bot Avatar */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-md opacity-70" />
                    <div className="relative w-10 h-10 glass rounded-full flex items-center justify-center border-2 border-white/20">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white/20 animate-pulse" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold flex items-center gap-2">
                      BotForge Assistant
                      <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full border border-white/10">
                        AI Powered
                      </span>
                    </h3>
                    <p className="text-xs text-white/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      Online • Usually replies instantly
                    </p>
                  </div>
                </div>

                {/* Window Controls */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="glass p-2 rounded-lg hover:bg-white/10 transition-all"
                  >
                    {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="glass p-2 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Messages Area - Only show when not minimized */}
            {!isMinimized && (
              <>
                <div className="h-[380px] overflow-y-auto p-6 space-y-4 custom-scrollbar">
                  {messages.map((message) => (
                    <ChatBubble key={message.id} message={message} />
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && <TypingIndicator />}
                </div>

                {/* Quick Replies */}
                <QuickReplies replies={quickReplies} />

                {/* Input Area */}
                <ChatInput />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;