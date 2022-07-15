import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.5, 1, 0.5, 1],
    },
  },
};

const variantsHome = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.5, 1, 0.5, 1],
    },
  },
};

const PageTransition = ({ children }) => (
  <AnimatePresence>
    <motion.div initial='initial' animate='enter' variants={variants}>
      {children}
    </motion.div>
  </AnimatePresence>
);

const PageTransitionHome = ({ children }) => (
  <AnimatePresence>
    <motion.div initial='initial' animate='enter' variants={variantsHome}>
      {children}
    </motion.div>
  </AnimatePresence>
);

export {PageTransition, PageTransitionHome};