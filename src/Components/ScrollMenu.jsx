import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi"; // Hamburger icon

const ScrollMenu = ({ onClick }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Show after scrolling 100px
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-50 rounded-full bg-teal-500 p-4 text-white shadow-lg transition-transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <FiMenu size={24} />
    </button>
  );
};

export default ScrollMenu;