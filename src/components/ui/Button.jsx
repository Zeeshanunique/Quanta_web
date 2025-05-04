import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Button = ({ 
  className = "", 
  href, 
  onClick, 
  white, 
  type = "button",
  children 
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const buttonClass = `button inline-flex items-center justify-center h-12 px-6 py-0 text-sm font-medium tracking-wide transition duration-300 rounded-lg focus-visible:outline-none whitespace-nowrap ${
    white 
      ? isLight 
        ? "text-n-1 bg-n-8 hover:bg-n-7" 
        : "text-n-8 bg-n-1 hover:bg-n-2" 
      : "text-n-1 bg-gradient-to-r from-color-1 to-color-2 hover:from-color-2 hover:to-color-1"
  } ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button; 