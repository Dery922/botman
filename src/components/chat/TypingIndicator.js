// src/components/chat/TypingIndicator.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex items-start gap-2"
    >
      {/* Bot Avatar */}
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-sm opacity-50" />
        <div className="relative w-8 h-8 glass rounded-full flex items-center justify-center border border-white/20">
          <Bot size={16} className="text-white" />
        </div>
      </div>

      {/* Typing Animation */}
      <div className="glass px-6 py-4 rounded-2xl rounded-tl-none">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="w-2.5 h-2.5 bg-white/60 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className="w-2.5 h-2.5 bg-white/60 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="w-2.5 h-2.5 bg-white/60 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;