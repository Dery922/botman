// components/effects/FloatingShapes.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = [
    { type: 'circle', size: 300, top: '10%', left: '5%', delay: 0, duration: 20, color: 'rgba(123, 47, 247, 0.03)' },
    { type: 'circle', size: 400, top: '60%', right: '10%', delay: 2, duration: 25, color: 'rgba(0, 212, 255, 0.03)' },
    { type: 'square', size: 250, bottom: '15%', left: '15%', delay: 1, duration: 18, color: 'rgba(255, 51, 102, 0.03)' },
    { type: 'square', size: 350, top: '30%', right: '20%', delay: 3, duration: 22, color: 'rgba(255, 170, 51, 0.03)' },
    { type: 'circle', size: 200, bottom: '30%', right: '30%', delay: 4, duration: 15, color: 'rgba(51, 255, 170, 0.03)' },
  ];

  return (
    <div className="fixed inset-0 z-1 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full backdrop-blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            background: shape.color,
            borderRadius: shape.type === 'circle' ? '50%' : '30%',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: shape.type === 'square' ? [0, 45, -45, 0] : 0,
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;