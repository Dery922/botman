// src/components/chat/ChatInput.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Mic, Smile } from 'lucide-react';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log('Send message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-5 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
      {/* Input Container */}
      <motion.div
        animate={{
          borderColor: isFocused 
            ? 'rgba(147, 51, 234, 0.5)' 
            : 'rgba(255, 255, 255, 0.1)'
        }}
        className="relative flex items-end gap-2 glass rounded-2xl p-2 transition-all"
      >
        {/* Attachment Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 glass rounded-xl hover:bg-white/10 transition-all flex-shrink-0"
        >
          <Paperclip size={18} className="text-white/60" />
        </motion.button>

        {/* Text Input */}
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            rows={1}
            className="w-full bg-transparent text-white placeholder-white/40 outline-none resize-none max-h-32 px-2 py-2.5 text-sm md:text-base"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.2) transparent'
            }}
          />
          
          {/* Character Count (optional) */}
          {message.length > 0 && (
            <span className="absolute bottom-2 right-2 text-[10px] text-white/30">
              {message.length}/500
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 glass rounded-xl hover:bg-white/10 transition-all"
          >
            <Smile size={18} className="text-white/60" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 glass rounded-xl hover:bg-white/10 transition-all"
          >
            <Mic size={18} className="text-white/60" />
          </motion.button>
          
          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            disabled={!message.trim()}
            className={`p-2.5 rounded-xl transition-all ${
              message.trim()
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/25'
                : 'glass text-white/40 cursor-not-allowed'
            }`}
          >
            <Send size={18} />
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Text */}
      <p className="text-[10px] text-white/30 text-center mt-3">
        Powered by BotForge AI • 100% Meta Compliant
      </p>
    </div>
  );
};

export default ChatInput;