import React from 'react';
import { motion } from 'framer-motion';

const PulseAnimation = ({ 
  children, 
  className = "",
  pulseColor = "rgba(147, 51, 234, 0.3)",
  scale = 1.1,
  duration = 2 
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${pulseColor} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, scale, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${pulseColor} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, scale * 1.2, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: duration / 3,
        }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${pulseColor} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, scale * 1.4, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: (duration / 3) * 2,
        }}
      />
    </div>
  );
};

export default PulseAnimation;