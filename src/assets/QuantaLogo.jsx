import React from 'react';

const QuantaLogo = ({ className = "", width = 160, height = 50, showTagline = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={showTagline ? 50 : width * 0.35} 
        height={showTagline ? 50 : height * 0.9} 
        viewBox="0 0 50 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        {/* Three ascending bars - matching reference design */}
        <rect 
          x="6" 
          y="20" 
          width="8" 
          height="18" 
          rx="4" 
          fill="#6B7280"
        />
        <rect 
          x="18" 
          y="12" 
          width="8" 
          height="26" 
          rx="4" 
          fill="#374151"
        />
        <rect 
          x="30" 
          y="8" 
          width="8" 
          height="34" 
          rx="4" 
          fill="#84CC16"
        />
      </svg>
      
      <div className="flex flex-col">
        <div 
          className="font-bold text-n-1 tracking-tight"
          style={{ 
            fontSize: showTagline ? '28px' : `${width * 0.16}px`,
            lineHeight: '1.1',
            letterSpacing: '-0.5px'
          }}
        >
          Quanta
        </div>
        
        {showTagline && (
          <div 
            className="text-n-4 font-medium tracking-wide uppercase"
            style={{ 
              fontSize: '9px',
              marginTop: '3px',
              letterSpacing: '1px'
            }}
          >
            Automate. Integrate. Accelerate
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantaLogo; 