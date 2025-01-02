import React from 'react';

const SkillIcon = ({ icon, name }) => {
  return (
    <img 
      src={`${process.env.PUBLIC_URL}/assets/icons/${icon}`}
      alt={name}
      className="skill-icon"
      loading="lazy"
      width="32"
      height="32"
    />
  );
};

export default SkillIcon; 