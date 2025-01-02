import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SkillIcon = ({ icon, name }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Remove file extension and add -light for dark mode
  const iconName = icon.replace('.svg', '');
  const darkModeIconPath = `${process.env.PUBLIC_URL}/assets/icons/${iconName}-light.svg`;
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
        // Fallback to original icon if light version doesn't exist
        e.target.src = lightModeIconPath;
      }}
    />
  );
};

export default SkillIcon; 