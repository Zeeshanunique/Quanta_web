import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const GlowingGrid = ({ color = '#AC6AFF' }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  // Grid properties
  const rows = 10;
  const columns = 10;
  const gridOpacity = isLight ? 0.15 : 0.3;
  const glowIntensity = isLight ? '20px' : '30px';
  const gridColor = isLight ? 'rgba(60, 60, 60, 0.2)' : 'rgba(255, 255, 255, 0.2)';
  const glowColor = color;
  
  // Animation for the floating grid
  const containerVariants = {
    initial: {
      scale: 0.95,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: gridOpacity,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };
  
  // Animate grid luminance points
  const luminancePoints = [
    { x: 20, y: 30, delay: 0 },
    { x: 70, y: 70, delay: 2 },
    { x: 40, y: 80, delay: 4 },
    { x: 80, y: 20, delay: 1 },
    { x: 10, y: 50, delay: 3 }
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Draw the grid */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-40">
          {Array.from({ length: rows + 1 }).map((_, index) => (
            <div 
              key={`h-${index}`} 
              className="w-full h-px" 
              style={{ backgroundColor: gridColor }}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-row justify-between opacity-40">
          {Array.from({ length: columns + 1 }).map((_, index) => (
            <div 
              key={`v-${index}`} 
              className="h-full w-px" 
              style={{ backgroundColor: gridColor }}
            />
          ))}
        </div>
        
        {/* Glowing points */}
        {luminancePoints.map((point, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{ 
              left: `${point.x}%`, 
              top: `${point.y}%`,
              width: '6px',
              height: '6px',
              backgroundColor: glowColor,
              boxShadow: `0 0 ${glowIntensity} ${glowColor}`,
              filter: 'blur(3px)'
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4,
              delay: point.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default GlowingGrid; 