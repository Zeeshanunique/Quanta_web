import React from 'react';
import { motion } from 'framer-motion';

const MenuSvg = ({ openNavigation }) => {
  const variant1 = {
    open: { rotate: 45, y: 7 },
    closed: { rotate: 0, y: 0 }
  };
  
  const variant2 = {
    open: { opacity: 0 },
    closed: { opacity: 1 }
  };
  
  const variant3 = {
    open: { rotate: -45, y: -7 },
    closed: { rotate: 0, y: 0 }
  };

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect 
        animate={openNavigation ? "open" : "closed"}
        variants={variant1}
        width="24" 
        height="2" 
        rx="1" 
        fill="currentColor" 
      />
      <motion.rect 
        animate={openNavigation ? "open" : "closed"}
        variants={variant2}
        y="8" 
        width="24" 
        height="2" 
        rx="1" 
        fill="currentColor" 
      />
      <motion.rect 
        animate={openNavigation ? "open" : "closed"}
        variants={variant3}
        y="16" 
        width="24" 
        height="2" 
        rx="1" 
        fill="currentColor" 
      />
    </svg>
  );
};

export default MenuSvg;
