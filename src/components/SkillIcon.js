import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SkillIcon = ({ icon, name }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Get the base name without extension
  const baseName = icon.replace('.svg', '');
  
  // Construct paths for both light and dark mode
  const darkModeIconPath = `${process.env.PUBLIC_URL}/assets/icons/${baseName.replace('scikitlearn', 'scikit-learn')}-light.svg`;
  const lightModeIconPath = `${process.env.PUBLIC_URL}/assets/icons/${icon}`;

  return (
    <img 
      src={isDarkMode ? darkModeIconPath : lightModeIconPath}
      alt={`${name} icon`}
      className="skill-icon"
      loading="lazy"
      width="32"
      height="32"
      onError={(e) => {
        console.log(`Failed to load icon: ${e.target.src}`);
        // If dark mode icon fails to load, fallback to light mode icon
        if (isDarkMode && e.target.src !== lightModeIconPath) {
          console.log(`Falling back to light mode icon for ${name}`);
          e.target.src = lightModeIconPath;
        }
      }}
    />
  );
};

export default SkillIcon; 