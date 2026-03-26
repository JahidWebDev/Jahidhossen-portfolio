import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FloatingNav = ({ isOpen, onOpen, onClose }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const floatingNavVariants = {
    initial: { scale: 0 },
    enter: {
      scale: 1,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
    },
    exit: {
      scale: 0,
      transition: { duration: 0.4, ease: [0.36, 0, 0.66, -0.56] },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonHover = {
    initial: { y: "100%" },
    enter: {
      y: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
    exit: {
      y: "-100%",
      transition: { ease: [0.11, 0, 0.5, 0], duration: 0.2, delay: 0.1 },
    },
  };

  const lineClass = `
    before:block before:h-[2px] before:w-2/5 before:m-auto before:bg-slate-900
    before:relative before:transition before:duration-300
    after:block after:h-[2px] after:w-2/5 after:m-auto after:bg-slate-900
    after:relative after:transition after:duration-300
    before:top-[5px] after:-top-[5px]
    content-none
  `;

  return (
    <AnimatePresence>
      {((isScrolled && !isOpen) || isOpen) && (
        <motion.div
          onClick={isOpen ? onClose : onOpen}
          variants={floatingNavVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          whileHover={{ scale: 1.12 }}
          className="fixed right-5 bottom-5 z-[100] flex h-14 w-14 md:h-16 md:w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-xl cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-full bg-teal-500"
                variants={buttonHover}
                initial="initial"
                animate="enter"
                exit="exit"
              />
            )}
          </AnimatePresence>

          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full">
            <div
              className={`w-full ${lineClass} ${
                isOpen
                  ? "before:top-px before:-rotate-45 after:-top-px after:rotate-45"
                  : ""
              }`}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;