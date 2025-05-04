import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const FloatingOrbs = () => {
  const { theme } = useTheme(); 
  const isLight = theme === 'light';

  // Define orbs with different colors, sizes, and animation parameters
  const orbs = [
    {
      color: 'from-color-1/40 to-color-2/0',
      size: 'w-[300px] h-[300px]',
      initialX: '-5%',
      initialY: '10%',
      animate: {
        x: ['0%', '5%', '0%'],
        y: ['0%', '-15%', '0%']
      },
      duration: 20,
      delay: 0
    },
    {
      color: 'from-color-2/30 to-color-1/0',
      size: 'w-[250px] h-[250px]',
      initialX: '70%',
      initialY: '20%',
      animate: {
        x: ['0%', '-10%', '0%'],
        y: ['0%', '10%', '0%']
      },
      duration: 25,
      delay: 2
    },
    {
      color: 'from-color-5/30 to-color-1/0',
      size: 'w-[200px] h-[200px]',
      initialX: '30%',
      initialY: '70%',
      animate: {
        x: ['0%', '15%', '0%'],
        y: ['0%', '-5%', '0%']
      },
      duration: 18,
      delay: 1
    },
    {
      color: 'from-color-6/20 to-color-2/0',
      size: 'w-[180px] h-[180px]',
      initialX: '80%',
      initialY: '65%',
      animate: {
        x: ['0%', '-7%', '0%'],
        y: ['0%', '-12%', '0%']
      },
      duration: 22,
      delay: 3
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden blur-3xl opacity-60">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-radial ${orb.color} ${orb.size} filter blur-xl`}
          style={{
            left: orb.initialX,
            top: orb.initialY,
            opacity: isLight ? 0.3 : 0.5
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: orb.delay
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs; 