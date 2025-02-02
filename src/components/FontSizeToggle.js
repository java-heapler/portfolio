import React, { useState, useEffect } from 'react';

const FontSizeToggle = () => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', fontSize + 'px');
  }, [fontSize]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 1, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 1, 12));

  return (
    <div className="font-size-toggle">
      <button onClick={decreaseFontSize} style={{ marginRight: '0.5rem' }}>A-</button>
      <button onClick={increaseFontSize}>A+</button>
    </div>
  );
};

export default FontSizeToggle; 