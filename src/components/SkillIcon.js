import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const SkillIcon = ({ icon, name }) => {
  const { isDark } = useTheme();

  // Get the base name without extension
  const baseName = icon.replace('.svg', '');
  
  // Construct paths for both light and dark mode
  const darkModeIconPath = `${process.env.PUBLIC_URL}/assets/icons/${baseName.replace('scikitlearn', 'scikit-learn')}-light.svg`;
  const lightModeIconPath = `${process.env.PUBLIC_URL}/assets/icons/${icon}`;

  useEffect(() => {
    console.log(`SkillIcon ${name}:`, {
      isDark,
      darkModeIconPath,
      lightModeIconPath,
      currentPath: isDark ? darkModeIconPath : lightModeIconPath
    });
  }, [isDark, darkModeIconPath, lightModeIconPath, name]);

  return (
    <img 
      src={isDark ? darkModeIconPath : lightModeIconPath}
      alt={`${name} icon`}
      className="skill-icon"
      loading="lazy"
      width="32"
      height="32"
      onError={(e) => {
        console.error(`Failed to load icon: ${e.target.src}`);
        // If dark mode icon fails to load, fallback to light mode icon
        if (isDark && e.target.src !== lightModeIconPath) {
          console.log(`Falling back to light mode icon for ${name}`);
          e.target.src = lightModeIconPath;
        }
      }}
    />
  );
};

export default SkillIcon; 