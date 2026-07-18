import { useState } from "react";
import { NavLink } from "react-router-dom";
import Image from "../img/profile.png";

import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";

function NavbarWrapper() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `group relative flex items-center gap-4
    px-6 py-4
    rounded-l-full
     
    font-medium

    transition-all duration-500 ease-out
    tracking-[2px]
    ${
      isActive
        ? "bg-[#c33201] text-white translate-x-8 "
        : "text-gray-400 hover:bg-[#c33201]/20 hover:text-white hover:translate-x-2"
    }`;

  const socialClass = `
    group
    w-11 h-11
    rounded-full
    bg-[#2C2F3F]
    border border-[#2b2b2b]
    flex items-center justify-center
    text-gray-300
    transition-all duration-500
    hover:bg-[#c33201]
    hover:border-[#c33201]
    hover:text-white
    hover:-translate-y-2
    hover:rotate-12
    
    active:scale-90
  `;

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 right-5 z-50 lg:hidden bg-[#c33201] text-white p-3 rounded-full shadow-lg"
      >
        <FaBars size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0
        h-screen
        w-full sm:w-80 lg:w-72
        bg-[#111]
        
        z-50
        transition-transform duration-500
        ${
          open ? "translate-x-0" : "-translate-x-full"
        }
        lg:translate-x-0
      `}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-white lg:hidden"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex flex-col items-center h-full overflow-y-auto px-8 py-10">

          {/* Profile */}
          <img
            src={Image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-7 border-[#2C2F3F] 
            "
          />
<h2
  className="mt-5 text-3xl text-white tracking-[3px] font-semibold"
  style={{ fontFamily: "BebasNeue" }}
>
  Jahid Hossen
</h2>

          

          {/* Social */}
          <div className="flex gap-4 mt-6">

            <a href="#" className={socialClass}>
              <FaFacebookF className="group-hover:scale-125 transition-all duration-500" />
            </a>

            <a href="#" className={socialClass}>
              <FaGithub className="group-hover:scale-125 transition-all duration-500" />
            </a>

            <a href="#" className={socialClass}>
              <FaLinkedinIn className="group-hover:scale-125 transition-all duration-500" />
            </a>

            <a href="#" className={socialClass}>
              <FaInstagram className="group-hover:scale-125 transition-all duration-500" />
            </a>

          </div>

          {/* Navigation */}
          <ul className="w-full mt-7 space-y-3">

            <li>
              <NavLink
                to="/"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                <FaHome className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                <FaUser className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resume"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                <FaFileAlt className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                Resume
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/portfolio"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                <FaBriefcase className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                <FaTools className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={navClass}
                onClick={() => setOpen(false)}
              >
                <FaEnvelope className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Footer */}
          <div className="mt-auto pt-10 w-full text-center">

  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c33201] to-transparent mb-6"></div>



  <p className="mt-2 text-sm text-gray-500">
    © 2026. All Rights Reserved.
  </p>

</div>

        </div>
      </aside>
    </>
  );
}

export default NavbarWrapper;