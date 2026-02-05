import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Specialization = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "GSAP Animations",
  ];

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

  // ===== GSAP MENU =====
  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    if (isMenuOpen) {
      gsap.set(overlayRef.current, { display: "block", opacity: 0 });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });

      gsap.set(menuRef.current, { x: "100%", display: "flex" });
      gsap.set(itemsRef.current, { x: 40, opacity: 0 });

      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(itemsRef.current, {
        x: 0,
        opacity: 1,
        stagger: 0.08,
        delay: 0.25,
        duration: 0.45,
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        onComplete: () =>
          gsap.set(overlayRef.current, { display: "none" }),
      });

      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.45,
        onComplete: () =>
          gsap.set(menuRef.current, { display: "none" }),
      });
    }
  }, [isMenuOpen]);

  return (
  <section>
      <section className="min-h-screen z-[9999] bg-[#191919] text-white relative">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 px-6 py-5 bg-[#191919]/80 backdrop-blur-md flex justify-between items-center">
        <h2 className="text-2xl text-[#0AE448] font-bold">Jahid Hossen</h2>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 bg-[#0AE448] rounded flex flex-col justify-center items-center space-y-1"
        >
          <span className={`block w-6 h-1 bg-black ${isMenuOpen && "rotate-45 translate-y-1.5"}`} />
          <span className={`block w-6 h-1 bg-black ${isMenuOpen && "opacity-0"}`} />
          <span className={`block w-6 h-1 bg-black ${isMenuOpen && "-rotate-45 -translate-y-1.5"}`} />
        </button>
      </nav>

      {/* ===== OVERLAY ===== */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70 z-40 hidden"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ===== MENU ===== */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-80 bg-[#0AE448] z-50 hidden p-6 flex flex-col justify-between"
      >
        <ul className="mt-20 space-y-4 text-black font-bold text-lg">
          {menuItems.map((item, i) => (
            <li key={i} ref={(el) => (itemsRef.current[i] = el)}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-black text-center">
          <div className="flex justify-center gap-4 text-xl mb-4">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaGithub />
            <FaWhatsapp />
          </div>
          <p className="text-sm">© Jahid Hossen 2026</p>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-3xl mb-4">Hello World</h1>
        <h2 className="text-5xl text-[#0AE448] font-bold mb-6">
          Specialization
        </h2>
        <p className="max-w-3xl text-lg mb-10">
          I specialize in Frontend Development using React and MERN stack.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="px-4 py-2 border-2 border-[#0AE448] text-[#0AE448] font-bold rounded-lg hover:bg-[#0AE448] hover:text-black transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
      <section className="min-h-screen z-[9999] bg-[#191919] text-white relative">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 px-6 py-5 bg-[#191919]/80 backdrop-blur-md flex justify-between items-center">
        <h2 className="text-2xl text-[#0AE448] font-bold">Jahid Hossen</h2>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 bg-[#0AE448] rounded flex flex-col justify-center items-center space-y-1"
        >
          <span className={`block w-6 h-1 bg-black ${isMenuOpen && "rotate-45 translate-y-1.5"}`} />
          <span className={`block w-6 h-1 bg-black ${isMenuOpen && "opacity-0"}`} />
          <span className={`block w-6 h-1 bg-black ${isMenuOpen && "-rotate-45 -translate-y-1.5"}`} />
        </button>
      </nav>

      {/* ===== OVERLAY ===== */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70 z-40 hidden"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ===== MENU ===== */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-80 bg-[#0AE448] z-50 hidden p-6 flex flex-col justify-between"
      >
        <ul className="mt-20 space-y-4 text-black font-bold text-lg">
          {menuItems.map((item, i) => (
            <li key={i} ref={(el) => (itemsRef.current[i] = el)}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-black text-center">
          <div className="flex justify-center gap-4 text-xl mb-4">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaGithub />
            <FaWhatsapp />
          </div>
          <p className="text-sm">© Jahid Hossen 2026</p>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-3xl mb-4">Hello World</h1>
        <h2 className="text-5xl text-[#0AE448] font-bold mb-6">
          Specialization
        </h2>
        <p className="max-w-3xl text-lg mb-10">
          I specialize in Frontend Development using React and MERN stack.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="px-4 py-2 border-2 border-[#0AE448] text-[#0AE448] font-bold rounded-lg hover:bg-[#0AE448] hover:text-black transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  </section>
  );
};

export default Specialization;
