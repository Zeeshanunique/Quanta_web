import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const Button = ({ 
  className = "", 
  href, 
  onClick, 
  white, 
  type = "button",
  children,
  disabled = false,
  loading = false,
  size = "medium",
  variant = "primary"
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const sizeClasses = {
    small: "h-9 px-4 text-sm",
    medium: "h-12 px-6 text-sm", 
    large: "h-14 px-8 text-base"
  };
  
  const variantClasses = {
    primary: white 
      ? isLight 
        ? "text-n-8 bg-n-1 border-2 border-n-3 hover:bg-n-2 hover:border-n-4" 
        : "text-n-1 bg-n-8 border-2 border-n-6 hover:bg-n-7 hover:border-n-5"
      : "text-n-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl",
    secondary: "text-n-3 bg-transparent border-2 border-n-6 hover:border-n-5 hover:text-n-2",
    ghost: "text-n-3 bg-transparent hover:bg-n-7 hover:text-n-1",
    danger: "text-n-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
  };
  
  const buttonClass = `button inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-xl focus-visible:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-n-8 whitespace-nowrap transform hover:scale-105 active:scale-95 ${
    sizeClasses[size]
  } ${
    variantClasses[variant]
  } ${
    disabled || loading ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100' : ''
  } ${className}`;
  
  const content = (
    <>
      {loading && (
        <motion.div 
          className="mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
        </motion.div>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={buttonClass}
      onClick={!disabled && !loading ? onClick : undefined}
      type={type}
      disabled={disabled || loading}
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  );
};

export default Button; 