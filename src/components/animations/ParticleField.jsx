import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const ParticleField = ({ count = 50, speed = 1, color = '#AC6AFF' }) => {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  // Adjust color based on theme
  const particleColor = isLight ? color : color;
  const particleOpacity = isLight ? 0.4 : 0.7;
  
  // Generate random particles
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    velocity: {
      x: (Math.random() - 0.5) * speed,
      y: (Math.random() - 0.5) * speed
    }
  }));

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0 opacity-70"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor,
            opacity: particleOpacity
          }}
          animate={{
            x: [0, particle.velocity.x * 100, 0],
            y: [0, particle.velocity.y * 100, 0],
            opacity: [particleOpacity, particleOpacity * 0.5, particleOpacity]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField; 