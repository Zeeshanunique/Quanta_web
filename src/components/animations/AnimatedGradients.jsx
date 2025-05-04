import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const AnimatedGradients = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  // Adjust opacity based on theme
  const gradientOpacity = isLight ? 0.3 : 0.5;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background base gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-20"
        style={{ 
          backgroundImage: isLight 
            ? 'linear-gradient(to bottom right, rgba(172, 106, 255, 0.1), rgba(255, 200, 118, 0.1))' 
            : 'linear-gradient(to bottom right, rgba(172, 106, 255, 0.2), rgba(255, 200, 118, 0.2))'
        }}
      />
      
      {/* Animated gradient 1 */}
      <motion.div
        className="absolute -inset-[100%] opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(172, 106, 255, ${gradientOpacity}), transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [gradientOpacity, gradientOpacity * 0.7, gradientOpacity],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Animated gradient 2 */}
      <motion.div
        className="absolute -inset-[100%] opacity-30"
        style={{
          background: `radial-gradient(circle at 30% 70%, rgba(255, 200, 118, ${gradientOpacity}), transparent 50%)`,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [gradientOpacity * 0.7, gradientOpacity, gradientOpacity * 0.7],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Animated gradient 3 */}
      <motion.div
        className="absolute -inset-[100%] opacity-30"
        style={{
          background: `radial-gradient(circle at 70% 20%, rgba(133, 141, 255, ${gradientOpacity}), transparent 40%)`,
        }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [gradientOpacity * 0.8, gradientOpacity * 0.5, gradientOpacity * 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default AnimatedGradients; 