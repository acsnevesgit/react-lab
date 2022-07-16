import React from 'react';
import { motion } from 'framer-motion';

// Example red circle
const styles = {
  background: 'red',
  borderRadius: 30,
  width: 50,
  height: 50,
  margin: 'auto'
};

export const Pop = () => (
  <motion.div
    style={styles}
    animate={{ scale: 3 }}
    transition={{ duration: 0.25 }}
  />
);