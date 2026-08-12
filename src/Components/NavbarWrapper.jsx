import { useState } from "react";
import { NavLink } from "react-router-dom";
import Image from "../img/profile.png";
import { HiBars3, HiXMark } from "react-icons/hi2";
import {

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
import { FaCertificate } from "react-icons/fa";
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
{/* Mobile Top Bar */}
<div
  className="
    fixed
    top-4
    left-7
    right-7
    z-[998]
    lg:hidden
    h-[52px]
    bg-[#111111]/90
    backdrop-blur-md
    flex
    items-center
    justify-between
    rounded-[3px]
    border
    border-white/10
  "
>
  {/* LEFT - GMAIL */}
  <a
    href="mailto:contactjahiddev@gmail.com"
    className="
      flex
      items-center
      gap-2
      px-4
      h-full
      text-gray-300
      hover:text-white
      transition
      text-sm
      whitespace-nowrap
    "
  >
    <FaEnvelope
      className="
        w-4
        h-4
        text-white
        flex-shrink-0
      "
    />

    <span>
      contactjahiddev@gmail.com
    </span>
  </a>

</div>


{/* Mobile Menu Button */}
<button
  onClick={() => setOpen(!open)}
  className="
    fixed
    top-4
    right-7
    z-[999]
    lg:hidden
    w-[56px]
    h-[52px]
    flex
    items-center
    justify-center
    text-white
    bg-[#111111]/95
    backdrop-blur-md
    rounded-[3px]
    border-l
    border-white/10
  "
>
  {open ? (
    <HiXMark className="w-7 h-7" />
  ) : (
    <HiBars3 className="w-7 h-7 text-white" />
  )}
</button>
      {/* Overlay */}
     {open && (
  <div
    onClick={() => setOpen(false)}
    className="
      fixed
      inset-0
      bg-[#111]
     
      z-40
      lg:hidden
     
     
    "
  />
)}

      {/* Sidebar */}
      {/* Sidebar */}
<aside
  className={`
    fixed
    top-0
    left-0
    h-screen
    w-full
    sm:w-80
    lg:w-72
    bg-[#111]
    z-50

    transform
    transition-all
    duration-500
    ease-in-out

    ${
      open
        ? "translate-y-0"
        : "-translate-y-full"
    }

    lg:translate-y-0
  `}
>
  <div
    className="
      flex
      flex-col
      items-center
      h-full
      px-6
      py-6

      max-[600px]:overflow-hidden
      max-[600px]:mt-16

      sm:px-8
      sm:py-10
      
      lg:mt-2
      lg:px-8
      lg:py-10
      lg:overflow-y-auto
    "
  >

    {/* Profile */}
    <img
      src={Image}
      alt="Profile"
      className="
        w-24
        h-24
        rounded-full
        object-cover
        border-[7px]
        border-[#2C2F3F]

        sm:w-28
        sm:h-28

        lg:w-32
        lg:h-32
      "
    />

    <h2
      className="
        mt-3
        text-2xl
        text-white
        tracking-[3px]
        font-semibold

        sm:mt-4
        sm:text-3xl

        lg:mt-5
        lg:text-3xl
      "
      style={{ fontFamily: "BebasNeue" }}
    >
      Jahid Hossen
    </h2>

    {/* Social */}
  <div
  className="
    flex
    gap-3
    mt-4

    sm:gap-4
    sm:mt-5

    lg:gap-4
    lg:mt-6
  "
>
  {/* Facebook */}
  <a
    href="https://www.facebook.com/jahid.hossen.558836/"
    target="_blank"
    rel="noopener noreferrer"
    className={socialClass}
  >
    <FaFacebookF className="group-hover:scale-125 transition-all duration-500" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/JahidWebDev"
    target="_blank"
    rel="noopener noreferrer"
    className={socialClass}
  >
    <FaGithub className="group-hover:scale-125 transition-all duration-500" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/jahid227mernfullstackdeveloperbd/"
    target="_blank"
    rel="noopener noreferrer"
    className={socialClass}
  >
    <FaLinkedinIn className="group-hover:scale-125 transition-all duration-500" />
  </a>

  {/* Instagram / Page */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className={socialClass}
  >
    <FaInstagram className="group-hover:scale-125 transition-all duration-500" />
  </a>
</div>

    {/* Navigation */}
    <ul
      className="
        w-full
        text-xl
        font-BebasNeue
        mt-4
        space-y-0

        sm:text-2xl
        sm:mt-5
        sm:space-y-1

        lg:text-2xl
        lg:mt-7
        lg:space-y-1
      "
    >

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
          to="/certificate"
          className={navClass}
          onClick={() => setOpen(false)}
        >
          <FaCertificate className="transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
          Certificate
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
    <div
      className="
      
        pt-5
        w-full
        text-center

        sm:pt-7

        lg:pt-10
      "
    >
      <div
        className="
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#c33201]
          to-transparent
          mb-3
          lg:mt-16
          lg:mb-6
        "
      />

      <p
        className="
          text-xs
          text-gray-500

          sm:text-sm

          lg:text-sm
          lg:-mt-4
        "
      >
        © 2026. All Rights Reserved.
      </p>
    </div>

  </div>
</aside>
    </>
  );
}

export default NavbarWrapper;