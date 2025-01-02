import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SkillIcon = ({ icon, name }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Remove file extension and add -light for dark mode
  const iconName = icon.replace('.svg', '');
  const iconPath = isDarkMode 
    ? `${process.env.PUBLIC_URL}/assets/icons/${iconName}-light.svg`
    : `${process.env.PUBLIC_URL}/assets/icons/${iconName}.svg`;

  return (
    <img 
      src={iconPath}
      alt={`${name} icon`}
      className="skill-icon"
      loading="lazy"
      width="32"
      height="32"
      onError={(e) => {
        // Fallback to original icon if light version doesn't exist
        e.target.src = `${process.env.PUBLIC_URL}/assets/icons/${icon}`;
      }}
    />
  );
};

export default SkillIcon; 