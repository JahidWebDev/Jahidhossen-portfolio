import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const Specialization = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "GSAP Animations",
  ];

  // ===== Menu State =====
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const itemsRef = useRef([]);
  const menuItems = [
    "Home",
    "Specialization",
    "Resume",
    "About",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  // ===== GSAP Menu Animation =====
  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";

      gsap.set(overlayRef.current, { display: "block", opacity: 0 });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });

      gsap.set(menuRef.current, { x: "100%", display: "block" });
      gsap.set(itemsRef.current, { x: 40, opacity: 0 });

      gsap.to(menuRef.current, { x: "0%", duration: 0.65 });
      gsap.to(itemsRef.current, { x: 0, opacity: 1, stagger: 0.09, delay: 0.25, duration: 0.55 });
    } else {
      document.body.style.overflow = "auto";

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
      });

      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.55,
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
    }
  }, [isMenuOpen]);

  return (
    <section className="w-full h-screen relative z-[50] bg-[#191919] text-white flex flex-col items-center justify-center text-center">
      {/* ===== NAVBAR ===== */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-6 bg-[#191919]/80 backdrop-blur-md flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl text-[#0AE448] font-bold">Jahid Hossen</h2>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 bg-[#0AE448] rounded flex flex-col justify-center items-center space-y-1"
        >
          <span className={`block w-6 h-1 bg-[#0e100f] transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-1 bg-[#0e100f] transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-1 bg-[#0e100f] transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* ===== OVERLAY ===== */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70 z-40"
        style={{ display: "none" }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ===== SLIDE MENU ===== */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-80 bg-[#0AE448] z-50 hidden p-6 flex flex-col justify-between"
        style={{ display: "none" }}
      >
        <ul className="flex flex-col space-y-4 mt-20 text-black font-bold text-lg">
          {menuItems.map((item, i) => (
            <li key={i} ref={(el) => (itemsRef.current[i] = el)}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center space-y-4 mb-6 text-black">
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
          <p className="text-sm">© Jahid Hossen 2026. All Rights Reserved</p>
        </div>
      </div>

      {/* ===== PAGE CONTENT ===== */}
      <div className="pt-28 flex flex-col items-center justify-center w-full">
        <h1 className="text-white text-3xl font-bold mb-8">Hello World</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#0AE448] mb-5 font-bold">
          Specialization
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
          I specialize in Frontend Development using React, and MERN stack applications with Node.js, Express, and MongoDB.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="px-4 py-2 border-2 border-[#0AE448] rounded-lg font-bold text-[#0AE448] transition-all duration-300 hover:bg-[#0AE448] hover:text-[#191919] hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialization;
