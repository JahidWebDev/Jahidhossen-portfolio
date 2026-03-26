import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CodeBy = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      {/* Circle Logo */}
      <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
        J
      </div>

      {/* Name Text */}
      <p className="text-white font-semibold text-lg md:text-xl">
        Jahid Hossen
      </p>
    </motion.div>
  );
};

export default CodeBy;