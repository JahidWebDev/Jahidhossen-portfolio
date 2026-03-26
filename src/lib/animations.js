export const menuSlide = {
  initial: { x: "100%" },
  enter: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

export const widthVariants = {
  base: { width: "100%" },
  lg: { width: "400px" },
  xl: { width: "500px" },
};

export const heightVariants = {
  base: { height: "100%" },
  lg: { height: "100%" },
  xl: { height: "100%" },
};

export const linkVariants = () => ({
  initial: { y: 50, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
});

export const textSlide = {
  initial: { y: 20, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
};

export const pathAnimation = (initialPath, targetPath) => ({
  initial: { d: initialPath },
  enter: { d: targetPath, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { d: initialPath, transition: { duration: 0.5, ease: "easeInOut" } },
});