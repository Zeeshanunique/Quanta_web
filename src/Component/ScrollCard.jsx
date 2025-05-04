import React, { useState, useEffect } from 'react';

const ScrollFlipCard = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate rotation based on scroll position
  const rotation = Math.min(scrollY / 2, 180); // Limit to 180 degrees

  const cardStyle = {
    width: '300px',
    height: '400px',
    perspective: '1000px', // Add perspective for 3D effect
    margin: '0 auto', // Center the card
  };

  const flipStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: `rotateX(${rotation}deg)`,
    transition: 'transform 0.3s ease-in-out',
  };

  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
  };

  const frontStyle = {
    ...faceStyle,
    backgroundColor: '#38b2ac', // Card front color
  };

  const backStyle = {
    ...faceStyle,
    backgroundColor: '#4299e1', // Card back color
    transform: 'rotateX(180deg)', // Flip the back side
  };

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <div style={cardStyle}>
        <div style={flipStyle}>
          <div style={frontStyle}>
            Front
          </div>
          <div style={backStyle}>
            Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollFlipCard;
