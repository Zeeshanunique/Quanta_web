import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
// Import SVG components
import PlusSvg from '../../assets/svg/PlusSvg';
import Brackets from '../../assets/svg/Brackets';
// Import images/assets
import robotImage from '../../assets/hero/robot.jpg';

const ValoraFloating = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  // Colors adjusted to match Valora site but with AgentForge/Quanta influence
  const primaryColor = isLight ? 'rgba(70, 67, 238, 0.25)' : 'rgba(98, 95, 255, 0.35)';
  const secondaryColor = isLight ? 'rgba(70, 133, 244, 0.2)' : 'rgba(100, 153, 255, 0.3)';
  const accentColor = isLight ? 'rgba(172, 106, 255, 0.3)' : 'rgba(172, 106, 255, 0.4)';
  
  // AI nodes (vertices in the "neural network")
  const aiNodes = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 3,
    pulseDelay: Math.random() * 4
  }));
  
  // Floating elements config - simplified to match Valora's cleaner style
  const floatingElements = [
    // Main gradient blob upper right
    {
      type: 'glow',
      color: primaryColor,
      position: { top: '-10%', right: '-5%', width: '50%', height: '50%' },
      opacity: isLight ? 0.4 : 0.5,
      animation: {
        y: ['0%', '3%', '0%'],
        x: ['0%', '-2%', '0%'],
        scale: [1, 1.05, 1],
      },
      duration: 20,
    },
    // Secondary gradient blob bottom left
    {
      type: 'glow',
      color: secondaryColor,
      position: { bottom: '-15%', left: '-10%', width: '40%', height: '40%' },
      opacity: isLight ? 0.3 : 0.4,
      animation: {
        y: ['0%', '-5%', '0%'],
        x: ['0%', '3%', '0%'],
        scale: [1, 1.1, 1],
      },
      duration: 25,
    },
    // Small accent blob
    {
      type: 'orb',
      color: accentColor,
      position: { top: '60%', right: '10%', width: '15%', height: '15%' },
      opacity: isLight ? 0.2 : 0.3,
      animation: {
        scale: [1, 1.2, 1],
        y: ['0%', '-10%', '0%'],
      },
      duration: 18,
    },
    // AI code block representation
    {
      type: 'codeblock',
      position: { top: '30%', left: '15%', width: '15%', height: '20%' },
      opacity: isLight ? 0.15 : 0.25,
      animation: {
        y: ['0%', '5%', '0%'],
        rotate: [0, 1, 0],
      },
      duration: 15,
    }
  ];

  // Generate random connections between AI nodes (for neural network effect)
  const generateConnections = () => {
    const connections = [];
    aiNodes.forEach((node, i) => {
      // Create 1-3 connections per node
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * aiNodes.length);
        if (targetIndex !== i) {
          connections.push({
            id: `${i}-${targetIndex}`,
            source: i,
            target: targetIndex,
            animated: Math.random() > 0.5
          });
        }
      }
    });
    return connections;
  };

  const connections = generateConnections();

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      {/* Subtle grid background (very faint) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${primaryColor.replace('0.25', '0.03')} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: isLight ? 0.2 : 0.25,
        }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main floating elements (blobs/gradients) */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            ...element.position,
            opacity: element.opacity,
            background: element.type === 'glow' || element.type === 'orb'
              ? `radial-gradient(circle, ${element.color} 0%, rgba(255,255,255,0) 70%)`
              : element.type === 'codeblock'
              ? 'none'
              : `radial-gradient(circle, ${element.color} 0%, rgba(255,255,255,0) 70%)`,
            filter: element.type === 'glow' || element.type === 'orb' ? 'blur(60px)' : 'none',
          }}
          animate={element.animation}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {element.type === 'codeblock' && (
            <Brackets className="w-full h-full" />
          )}
        </motion.div>
      ))}
      
      {/* AI Neural Network Effect */}
      <div className="absolute inset-0">
        {/* AI Nodes */}
        {aiNodes.map((node, index) => (
          <motion.div
            key={`node-${index}`}
            className="absolute rounded-full bg-color-1"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              opacity: isLight ? 0.5 : 0.7,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.pulseDelay,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Neural Connections */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((connection) => {
            const source = aiNodes[connection.source];
            const target = aiNodes[connection.target];
            return (
              <motion.line
                key={connection.id}
                x1={`${source.x}%`}
                y1={`${source.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke={isLight ? 'rgba(172, 106, 255, 0.15)' : 'rgba(172, 106, 255, 0.25)'}
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={connection.animated ? {
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.5, 0]
                } : { 
                  pathLength: 1,
                  opacity: 0.2
                }}
                transition={connection.animated ? {
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                } : {}}
              />
            );
          })}
        </svg>
      </div>
      
      {/* Decorative Plus Signs */}
      <div className="absolute top-[20%] left-[10%]">
        <PlusSvg className="text-color-1 opacity-20 w-4 h-4" />
      </div>
      <div className="absolute bottom-[30%] right-[15%]">
        <PlusSvg className="text-color-1 opacity-20 w-4 h-4" />
      </div>
      <div className="absolute top-[70%] left-[75%]">
        <PlusSvg className="text-color-1 opacity-20 w-4 h-4" />
      </div>
      
      {/* Very subtle floating dots */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={`dot-${index}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: primaryColor.replace('0.25', '0.4'),
            opacity: isLight ? 0.15 : 0.2,
          }}
          animate={{
            y: [0, -(Math.random() * 30 + 10), 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default ValoraFloating; 