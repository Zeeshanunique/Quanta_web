import React from 'react';
import { Helmet } from 'react-helmet-async';

// This component preloads critical site assets to improve page load performance
const PreloadAssets = () => {
  return (
    <Helmet>
      {/* Preload critical fonts if any */}
      <link 
        rel="preconnect" 
        href="https://fonts.googleapis.com"
      />
      <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin=""
      />
    </Helmet>
  );
};

export default PreloadAssets;