import { motion } from "framer-motion";

const MagneticComponent = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticComponent;