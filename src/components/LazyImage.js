import React from 'react';

const LazyImage = ({ src, alt, ...rest }) => {
  const webpSrc = src.replace(/\.(jpg|png)$/i, '.webp');
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} loading="lazy" {...rest} />
    </picture>
  );
};

export default LazyImage; 