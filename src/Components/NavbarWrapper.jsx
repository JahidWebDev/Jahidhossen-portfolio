import { useState } from "react";
import { NavLink } from "react-router-dom";
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
    `flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-sky-500 text-white"
        : "text-gray-300 hover:bg-slate-700 hover:text-white"
    }`;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 right-5 z-50 lg:hidden bg-sky-500 text-white p-3 rounded-full shadow-lg"
      >
        <FaBars size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen
          w-full sm:w-80 lg:w-72
          bg-slate-900
          z-50
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 lg:hidden text-white"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex flex-col items-center px-8 py-10 h-full overflow-y-auto">

          {/* Profile */}
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-sky-500 object-cover"
          />

          <h2
            className="mt-5 text-3xl text-white"
            style={{ fontFamily: "BebasNeue" }}
          >
            Jahid Hossen
          </h2>

          <p
            className="text-gray-400 mt-1"
            style={{ fontFamily: "Cabin" }}
          >
            MERN Stack Developer
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition">
              <FaGithub />
            </a>

            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition">
              <FaLinkedinIn />
            </a>

            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition">
              <FaInstagram />
            </a>
          </div>

          {/* Navigation */}
          <ul className="w-full mt-10 space-y-3">

            <li>
              <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>
                <FaHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navClass} onClick={() => setOpen(false)}>
                <FaUser />
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/resume" className={navClass} onClick={() => setOpen(false)}>
                <FaFileAlt />
                Resume
              </NavLink>
            </li>

            <li>
              <NavLink to="/portfolio" className={navClass} onClick={() => setOpen(false)}>
                <FaBriefcase />
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" className={navClass} onClick={() => setOpen(false)}>
                <FaTools />
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>
                <FaEnvelope />
                Contact
              </NavLink>
            </li>

          </ul>

          <div className="mt-auto text-center text-gray-500 text-sm pt-10">
            © 2026 Jahid Hossen
          </div>

        </div>
      </aside>
    </>
  );
}

export default NavbarWrapper;