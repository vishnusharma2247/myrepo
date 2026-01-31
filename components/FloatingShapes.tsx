'use client';

import { motion } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[var(--accent-primary)] opacity-5 blur-xl"
      />
      
      {/* Top Right */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[var(--accent-primary)] opacity-5 blur-2xl"
      />
      
      {/* Middle Left */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 left-5 w-16 h-16 rounded-xl bg-green-500 opacity-5 blur-xl rotate-45"
      />
      
      {/* Bottom Right */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute bottom-40 right-10 w-24 h-24 rounded-full bg-yellow-500 opacity-5 blur-2xl"
      />
      
      {/* Center */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[var(--accent-primary)] blur-3xl"
      />
    </div>
  );
};

export default FloatingShapes;
