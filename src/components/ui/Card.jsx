import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const Card = ({ 
  children, 
  className = "", 
  hover = true,
  gradient = false,
  padding = "default",
  onClick,
  ...props 
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  
  const paddingClasses = {
    none: "",
    small: "p-4",
    default: "p-6",
    large: "p-8"
  };
  
  const baseClasses = `
    rounded-2xl border transition-all duration-300 backdrop-blur-sm
    ${paddingClasses[padding]}
    ${gradient 
      ? 'bg-gradient-to-br from-n-7/50 to-n-6/30 border-n-5/30' 
      : isLight 
        ? 'bg-white/80 border-n-3/20 shadow-lg' 
        : 'bg-n-7/50 border-n-6/30 shadow-xl'
    }
    ${hover ? 'hover:shadow-2xl hover:scale-[1.02] hover:border-purple-500/30' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: hover ? {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    } : {}
  };

  return (
    <motion.div
      className={baseClasses}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Card sub-components
const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold text-n-1 mb-2 ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-n-3 leading-relaxed ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "" }) => (
  <div className={`mt-6 pt-4 border-t border-n-6/20 ${className}`}>
    {children}
  </div>
);

// Export all components
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;