import React from 'react';
import { motion } from 'framer-motion';

const BreatheAnimation = ({ 
  children, 
  className = "",
  scale = [1, 1.05, 1],
  duration = 4,
  delay = 0 
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale,
        filter: [
          "drop-shadow(0 0 0px rgba(147, 51, 234, 0))",
          "drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))",
          "drop-shadow(0 0 0px rgba(147, 51, 234, 0))"
        ]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default BreatheAnimation;