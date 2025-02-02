import React, { useState, useEffect } from 'react';

const FontSizeToggle = () => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', fontSize + 'px');
  }, [fontSize]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 1, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 1, 12));

  return (
    <div style={{ position: 'fixed', bottom: '80px', right: '20px', zIndex: 9999, background: '#fff', padding: '0.5rem', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
      <button onClick={decreaseFontSize} style={{ marginRight: '0.5rem' }}>A-</button>
      <button onClick={increaseFontSize}>A+</button>
    </div>
  );
};

export default FontSizeToggle; 