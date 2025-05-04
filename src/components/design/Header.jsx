import React from 'react';
import { motion } from 'framer-motion';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { useTheme } from '../../hooks/useTheme';

export const HamburgerMenu = ({ openNavigation, className, children }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const variants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto' }
  };
  
  // Disable/enable page scroll when the menu is shown/hidden
  React.useEffect(() => {
    if (openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [openNavigation]);

  return (
    <motion.div
      className={`fixed top-[5rem] left-0 right-0 z-40 ${
        isLight 
          ? 'bg-n-1 border-n-3 border-t' 
          : 'bg-n-8 border-n-6 border-t'
      } lg:hidden overflow-hidden ${className}`}
      initial="hidden"
      animate={openNavigation ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}; 