import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from 'framer-motion';

const MagneticComponent = ({ children, className = '', modifier = { x: 0.3, y: 0.3 } }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [0, 100], [-modifier.x * 100, modifier.x * 100]);
  const translateY = useTransform(mouseY, [0, 100], [-modifier.y * 100, modifier.y * 100]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: translateX, y: translateY }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticComponent;