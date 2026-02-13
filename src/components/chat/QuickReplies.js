// src/components/chat/QuickReplies.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Book, 
  Play,
  DollarSign,
  Settings,
  HelpCircle,
  MessageSquare 
} from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Zap: Zap,
  Book: Book,
  Play: Play,
  DollarSign: DollarSign,
  Settings: Settings,
  HelpCircle: HelpCircle,
  MessageSquare: MessageSquare
};

const QuickReplies = ({ replies }) => {
  return (
    <div className="px-6 py-4 border-t border-white/10 bg-black/20">
      <p className="text-xs text-white/50 mb-3">Quick replies:</p>
      <div className="flex flex-wrap gap-2">
        {replies.map((reply, index) => {
          const Icon = iconMap[reply.icon] || MessageSquare;
          
          return (
            <motion.button
              key={reply.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" />
              <div className="relative glass px-4 py-2.5 rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-all flex items-center gap-2">
                <Icon size={14} className="text-white/70 group-hover:text-white transition-colors" />
                <span className="text-xs font-medium text-white/80 group-hover:text-white transition-colors">
                  {reply.text}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickReplies;