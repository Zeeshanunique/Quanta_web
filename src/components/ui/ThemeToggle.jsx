import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
        theme === 'dark' 
          ? 'bg-color-1 border border-n-7' 
          : 'bg-n-2 border border-n-3'
      } ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span 
        className={`block w-4 h-4 rounded-full transition-transform duration-300 ${
          theme === 'dark' 
            ? 'translate-x-6 bg-n-8' 
            : 'translate-x-0 bg-n-1'
        }`}
      />
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      
      {/* Sun and Moon icons */}
      <span 
        className={`absolute top-1 left-1 text-xs transition-opacity ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        ☀️
      </span>
      <span 
        className={`absolute top-1 right-1 text-xs transition-opacity ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        🌙
      </span>
    </button>
  );
};

export default ThemeToggle; 