import React, { useState, useEffect } from 'react';

export const ReadingProgress = () => {
  const [width, setWidth] = useState(0);

  const scrollHandler = () => {
    const windowHeight = window.document.documentElement.scrollHeight - window.innerHeight;
    const currentPosition = window.scrollY;
    const scrolled = (currentPosition / windowHeight) * 100;
    setWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return <div className="reading-progress-bar" style={{ width: `${width}%` }} />;
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </div>
  );
};

export const InteractiveBackground = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.className = 'interactive-bg';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const particles = [];
    const particleCount = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.radius = Math.random() * 2;
      }

      move() {
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      resize();
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.move();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 123, 255, 0.1)';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export const LoadingAnimation = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-animation">
      <div className="loading-spinner" />
    </div>
  );
};

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setShowBanner(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent">
      <p>
        This website uses cookies to enhance your experience.
        By continuing to visit this site, you agree to our use of cookies.
      </p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  );
};

export const SkillProgressBar = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the progress bar when component mounts
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="skill-progress">
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${width}%` }} 
        />
      </div>
    </div>
  );
}; 