// src/components/chat/ChatBubble.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Check, CheckCheck, Clock } from 'lucide-react';

const ChatBubble = ({ message }) => {
  const isBot = message.type === 'bot';

  const getStatusIcon = () => {
    switch (message.status) {
      case 'sent':
        return <Check size={12} className="text-white/40" />;
      case 'delivered':
        return <CheckCheck size={12} className="text-white/40" />;
      case 'read':
        return <CheckCheck size={12} className="text-blue-400" />;
      default:
        return <Clock size={12} className="text-white/40" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: isBot ? -20 : 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 500 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex items-start gap-2 max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Avatar */}
        {isBot && (
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-sm opacity-50" />
            <div className="relative w-8 h-8 glass rounded-full flex items-center justify-center border border-white/20">
              <Bot size={16} className="text-white" />
            </div>
          </div>
        )}

        {!isBot && (
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm opacity-50" />
            <div className="relative w-8 h-8 glass rounded-full flex items-center justify-center border border-white/20">
              <User size={16} className="text-white" />
            </div>
          </div>
        )}

        {/* Message Content */}
        <div>
          <div
            className={`relative px-5 py-3 rounded-2xl ${
              isBot
                ? 'glass rounded-tl-none border border-white/10'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-tr-none'
            }`}
          >
            {/* Message Text */}
            <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>

            {/* Message Metadata */}
            <div className={`flex items-center justify-end gap-1 mt-1 ${
              isBot ? 'text-white/40' : 'text-white/70'
            }`}>
              <span className="text-[10px]">
                {new Date(message.timestamp).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
              {!isBot && getStatusIcon()}
            </div>
          </div>

          {/* Suggested Actions (for bot messages) */}
          {isBot && message.id === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              <button className="text-xs px-3 py-1.5 glass rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all">
                View Pricing
              </button>
              <button className="text-xs px-3 py-1.5 glass rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all">
                Schedule Demo
              </button>
              <button className="text-xs px-3 py-1.5 glass rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all">
                Contact Sales
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBubble;