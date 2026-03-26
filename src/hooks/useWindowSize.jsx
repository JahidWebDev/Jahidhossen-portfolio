import { useState, useEffect } from "react";

const getWindowSize = () => {
  if (typeof window === "undefined") {
    return [0, 0];
  }
  return [window.innerWidth, window.innerHeight];
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;