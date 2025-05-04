import React from 'react';

export const AIPattern = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
        <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* AI Brain Circuit */}
    <path 
      d="M100 40 C150 40 180 80 180 120 C180 160 140 180 100 180 C60 180 20 160 20 120 C20 80 50 40 100 40" 
      fill="url(#ai-gradient)" 
      stroke="rgba(99, 102, 241, 0.5)" 
      strokeWidth="2"
      filter="url(#glow)"
    />
    {/* Circuit Lines */}
    <g stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" fill="none">
      {[...Array(6)].map((_, i) => (
        <path
          key={i}
          d={`M${60 + i * 20} 100 Q100 ${80 + i * 10} ${140 - i * 20} 100`}
        />
      ))}
    </g>
    {/* Neural Nodes */}
    {[...Array(8)].map((_, i) => (
      <circle
        key={i}
        cx={80 + Math.random() * 40}
        cy={80 + Math.random() * 40}
        r="3"
        fill="white"
        filter="url(#glow)"
      >
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur={`${1 + Math.random()}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </svg>
);

export const DevelopmentPattern = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="dev-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)" />
        <stop offset="100%" stopColor="rgba(34, 197, 94, 0.1)" />
      </linearGradient>
    </defs>
    {/* Code Editor */}
    <rect x="30" y="40" width="140" height="120" rx="10" 
      fill="url(#dev-gradient)" 
      stroke="rgba(34, 197, 94, 0.3)" 
    />
    {/* Code Lines */}
    <g stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1">
      {[...Array(5)].map((_, i) => (
        <React.Fragment key={i}>
          <line 
            x1="45" 
            y1={70 + i * 15} 
            x2={120 + Math.random() * 30} 
            y2={70 + i * 15} 
          />
          <circle 
            cx="40" 
            cy={70 + i * 15} 
            r="2" 
            fill="rgba(34, 197, 94, 0.5)"
          />
        </React.Fragment>
      ))}
    </g>
    {/* Floating Symbols */}
    {['</', '{', '}>', '/>', '()'].map((symbol, i) => (
      <text
        key={i}
        x={40 + (i * 30)}
        y={140}
        fill="rgba(34, 197, 94, 0.4)"
        fontSize="14"
        fontFamily="monospace"
      >
        {symbol}
      </text>
    ))}
  </svg>
);

export const DataPattern = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(244, 63, 94, 0.2)" />
        <stop offset="100%" stopColor="rgba(244, 63, 94, 0.1)" />
      </linearGradient>
    </defs>
    {/* Data Visualization Graph */}
    <g transform="translate(40, 40)">
      {/* Chart Background */}
      <rect width="120" height="120" rx="10" fill="url(#data-gradient)" />
      {/* Animated Data Points */}
      {[...Array(5)].map((_, i) => (
        <g key={i}>
          <circle
            cx={30 + i * 20}
            cy={60 + Math.sin(i) * 20}
            r="4"
            fill="rgba(244, 63, 94, 0.5)"
          >
            <animate
              attributeName="cy"
              values={`${60 + Math.sin(i) * 20};${60 + Math.cos(i) * 20};${60 + Math.sin(i) * 20}`}
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            d={`M${30 + i * 20} ${60 + Math.sin(i) * 20} L${30 + (i + 1) * 20} ${60 + Math.sin(i + 1) * 20}`}
            stroke="rgba(244, 63, 94, 0.3)"
            strokeWidth="2"
            fill="none"
          />
        </g>
      ))}
    </g>
  </svg>
);

export const SecurityPattern = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="security-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(234, 179, 8, 0.2)" />
        <stop offset="100%" stopColor="rgba(234, 179, 8, 0.1)" />
      </linearGradient>
      <filter id="security-glow">
        <feGaussianBlur stdDeviation="1" result="glow"/>
        <feMerge>
          <feMergeNode in="glow"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Shield */}
    <path
      d="M100 40 L160 60 V120 C160 150 130 180 100 180 C70 180 40 150 40 120 V60 Z"
      fill="url(#security-gradient)"
      stroke="rgba(234, 179, 8, 0.3)"
      strokeWidth="2"
      filter="url(#security-glow)"
    />
    {/* Lock */}
    <g transform="translate(75, 90)">
      <path
        d="M25 0 V15 H75 V0"
        fill="none"
        stroke="rgba(234, 179, 8, 0.5)"
        strokeWidth="4"
      />
      <rect
        x="15"
        y="15"
        width="70"
        height="50"
        rx="5"
        fill="rgba(234, 179, 8, 0.3)"
        stroke="rgba(234, 179, 8, 0.5)"
        strokeWidth="2"
      />
      <circle cx="50" cy="40" r="10" fill="rgba(234, 179, 8, 0.5)" />
    </g>
  </svg>
);

export const MarketingPattern = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="marketing-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
        <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
      </linearGradient>
    </defs>
    {/* Growth Chart */}
    <g transform="translate(40, 40)">
      <rect width="120" height="120" rx="10" fill="url(#marketing-gradient)" />
      {/* Trend Line */}
      <path
        d="M20 100 Q50 80 80 60 T120 20"
        fill="none"
        stroke="rgba(139, 92, 246, 0.5)"
        strokeWidth="3"
      />
      {/* Data Points */}
      {[20, 50, 80, 120].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={100 - i * 20}
          r="4"
          fill="white"
        >
          <animate
            attributeName="r"
            values="4;6;4"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
  </svg>
);

export const SmartPattern = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="smart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(14, 165, 233, 0.2)" />
        <stop offset="100%" stopColor="rgba(14, 165, 233, 0.1)" />
      </linearGradient>
    </defs>
    {/* Circuit Grid */}
    <g transform="translate(40, 40)">
      <rect width="120" height="120" rx="10" fill="url(#smart-gradient)" />
      {/* Circuit Paths */}
      <g stroke="rgba(14, 165, 233, 0.4)" strokeWidth="2" fill="none">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <path d={`M0 ${30 * i} H120`} />
            <path d={`M${30 * i} 0 V120`} />
          </React.Fragment>
        ))}
      </g>
      {/* Connection Points */}
      {[...Array(16)].map((_, i) => (
        <circle
          key={i}
          cx={(i % 4) * 30 + 15}
          cy={Math.floor(i / 4) * 30 + 15}
          r="3"
          fill="rgba(14, 165, 233, 0.5)"
        >
          <animate
            attributeName="fill-opacity"
            values="0.5;1;0.5"
            dur={`${1 + Math.random()}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
  </svg>
);