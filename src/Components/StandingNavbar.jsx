import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MagneticComponent from "../hoc/MagneticComponent";
import CodeBy from "./CodeBy";
import { navLinks } from "../constants/navLinks";

const StandingNavbar = ({ startSplash }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  return (
    <nav className="fixed top-0 left-0 w-full z-40 flex h-[80px] items-center justify-between bg-slate-950/85 backdrop-blur-md px-6 md:px-10 text-white border-b border-white/5">
      {/* Left Side Logo */}
      <MagneticComponent>
        <CodeBy />
      </MagneticComponent>

      {/* Right Side Nav Items */}
      <div className="flex items-center gap-6 md:gap-10">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <button
              key={index}
              onClick={() => {
                if (pathname === link.href) {
                  window.location.reload();
                } else {
                  startSplash && startSplash(); // Safe call
                  navigate(link.href);
                }
              }}
              className={`relative text-sm md:text-base font-medium transition duration-300 ${
                isActive ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.title}

              {/* Active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-teal-400 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default StandingNavbar;