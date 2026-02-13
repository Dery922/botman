// components/common/GlassCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -5,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        borderColor: 'rgba(255,255,255,0.2)'
      } : {}}
      transition={{ duration: 0.3 }}
      className={`glass-card relative overflow-hidden ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      {children}
    </motion.div>
  );
};

export default GlassCard;