import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (e) => {
      // Only handle internal anchor links
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      e.preventDefault();
      const id = target.getAttribute('href').slice(1);
      const element = document.getElementById(id);

      if (element) {
        // Get the header height for offset
        const headerHeight = document.querySelector('.navigation')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Handle touch events for mobile
    const handleTouchStart = (e) => {
      // Store the initial touch position
      window.touchStartY = e.touches[0].pageY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].pageY;
      const touchDiff = window.touchStartY - touchEndY;

      // If the touch movement is significant, prevent default behavior
      if (Math.abs(touchDiff) > 50) {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener('click', handleLinkClick);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
}; 