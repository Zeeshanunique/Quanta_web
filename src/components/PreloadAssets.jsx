import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../assets1/svg/qunataheader.svg'; // Should be replaced with AgentForge logo

// This component preloads critical site assets to improve page load performance
const PreloadAssets = () => {
  // Add any key assets that should be preloaded
  const criticalAssets = [
    logo
  ];
  
  return (
    <Helmet>
      {criticalAssets.map((asset, index) => (
        <link 
          key={index}
          rel="preload" 
          href={asset} 
          as={asset.endsWith('.svg') ? 'image' : 
             asset.endsWith('.woff2') ? 'font' : 'image'} 
          type={asset.endsWith('.svg') ? 'image/svg+xml' : 
               asset.endsWith('.woff2') ? 'font/woff2' : 'image/png'}
          crossOrigin="anonymous"
        />
      ))}
    </Helmet>
  );
};

export default PreloadAssets;