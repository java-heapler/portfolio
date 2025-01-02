import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const createScrollReveal = (element, options = {}) => {
  const defaults = {
    y: 50,
    duration: 1,
    opacity: 0,
    ease: 'power3.out',
    delay: 0,
    start: 'top 80%',
  };

  const settings = { ...defaults, ...options };

  return gsap.from(element, {
    y: settings.y,
    opacity: settings.opacity,
    duration: settings.duration,
    ease: settings.ease,
    delay: settings.delay,
    scrollTrigger: {
      trigger: element,
      start: settings.start,
      toggleActions: 'play none none reverse',
    },
  });
};

export const createStaggerReveal = (parent, children, options = {}) => {
  const defaults = {
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    start: 'top 80%',
  };

  const settings = { ...defaults, ...options };

  return gsap.from(children, {
    y: settings.y,
    opacity: 0,
    duration: settings.duration,
    stagger: settings.stagger,
    ease: settings.ease,
    scrollTrigger: {
      trigger: parent,
      start: settings.start,
      toggleActions: 'play none none reverse',
    },
  });
};

export const createParallaxEffect = (element, options = {}) => {
  const defaults = {
    speed: 0.5,
    start: 'top bottom',
    end: 'bottom top',
  };

  const settings = { ...defaults, ...options };

  return gsap.to(element, {
    y: () => -100 * settings.speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: settings.start,
      end: settings.end,
      scrub: true,
    },
  });
}; 