import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradient = () => {
  return (
    <motion.div
      className="animated-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default AnimatedGradient; 