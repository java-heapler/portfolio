import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Fade in and slide up animation
export const fadeInUp = (element, delay = 0, duration = 1) => {
  gsap.from(element, {
    y: 60,
    opacity: 0,
    duration,
    delay,
    ease: 'power3.out'
  });
};

// Stagger children elements animation
export const staggerChildren = (parent, childrenSelector, staggerAmount = 0.2) => {
  gsap.from(childrenSelector, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: staggerAmount,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: parent,
      start: 'top 80%',
    }
  });
};

// Reveal on scroll animation
export const revealOnScroll = (element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power2.out'
  });
};

// Scale in animation
export const scaleIn = (element, delay = 0) => {
  gsap.from(element, {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'back.out(1.7)'
  });
};

// Horizontal slide animation
export const slideInFromSide = (element, fromLeft = true) => {
  gsap.from(element, {
    x: fromLeft ? -100 : 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
    },
    ease: 'power3.out'
  });
}; 