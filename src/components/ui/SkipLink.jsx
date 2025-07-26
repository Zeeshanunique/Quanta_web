import React from 'react';

const SkipLink = ({ href = "#main-content", children = "Skip to main content" }) => {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50 focus:z-50 transition-all duration-200"
      onFocus={(e) => {
        e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
    >
      {children}
    </a>
  );
};

export default SkipLink;