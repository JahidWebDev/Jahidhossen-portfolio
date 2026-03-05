import React, { useState, useRef, useEffect } from "react";
import JahidHossen from "../img/Jahid-Hossen-JahidHossen.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";

/* ================= SOCIAL ICONS ================= */
const socialIcons = [
  { Icon: FaLinkedin, hover: "hover:text-blue-400", href: "#" },
  { Icon: FaGithub, hover: "hover:text-black", href: "#" },
  { Icon: FaTwitter, hover: "hover:text-sky-300", href: "#" },
  { Icon: FaInstagram, hover: "hover:text-pink-400", href: "#" },
];

/* ================= HERO COMPONENT ================= */
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const menuItems = [
    "Home",
    "Specialization",
    "Resume",
    "About",
    "Projects",
    "Testimonials",
    "Contact",
  ];

  /* ================= MENU ANIMATION ================= */
useEffect(() => {
  if (!menuRef.current || !overlayRef.current) return;

  const ctx = gsap.context(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");

      gsap.set(overlayRef.current, { display: "block" });

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );

      gsap.set(menuRef.current, { x: "100%", display: "block" });

      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power4.out",
      });

    } else {
      document.documentElement.classList.remove("overflow-hidden");

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });

      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power4.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  });

  return () => ctx.revert();

}, [isMenuOpen]);

  return (
    <div id="home" className="relative  w-full">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] px-6 py-4 flex justify-between items-center  text-white">
        <h2 className="text-2xl sm:text-3xl font-bold">
          <span className="text-[#0AE448]">Jahid</span>{" "}
          <span className="text-[#0AE448] font-semibold ml-1">Hossen</span>
        </h2>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative w-10 h-10 z-50 flex flex-col justify-center items-center gap-1"
       
        >
          <span
            className={`block w-8 h-1 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        
        className="relative w-full min-h-screen bg-[#191919] z-[-8888] flex items-center justify-center px-6 pt-24 lg:pt-0"
      >
        <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 text-[#FFFCE1]">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center gap-4">
            <h4 className="uppercase text-[clamp(24px,3vw,56px)]">
              <span className="text-[#0AE448]">Hi,</span> I am Jahid
            </h4>

            <h1 className="leading-none text-[clamp(52px,9vw,140px)] whitespace-nowrap">
              FRONTEND AND <br />
              <span className="block">MERN STACK DEVELOPER</span>
            </h1>

            <h6 className="text-2xl leading-relaxed mb-3 max-w-xl">
              I am a Frontend and MERN Stack Developer with strong experience
              in building modern, responsive, and performance-driven web
              applications. I specialize in creating clean user interfaces and
              scalable full-stack solutions.
            </h6>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4 text-2xl">
              {socialIcons.map(({ Icon, hover }, idx) => (
                <a key={idx} href="#" className={`${hover} transition`}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <img
              src={JahidHossen}
              alt="Jahid Hossen"
              className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[500px] object-cover rounded-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ================= MENU OVERLAY ================= */}
      <div
        ref={overlayRef}
        className="fixed z- inset-0 bg-black/70 backdrop-blur-sm z-40"
        style={{ display: "none" }}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-full sm:w-[85%] md:w-[380px] bg-[#0AE448] z-50"
        style={{ display: "none" }}
      >
        
        <div className="flex flex-col mt-40 px-10 space-y-7 text-2xl font-bold">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* ================= SCROLLABLE SECTIONS ================= */}
      <section
        id="about"
        className="min-h-screen p-10 bg-[#111] text-white flex flex-col justify-center"
      >
        <h2 className="text-4xl mb-4">About Me</h2>
        <p>
          I am a passionate MERN Stack developer with 3 years of experience
          building scalable web applications and beautiful user interfaces.
        </p>
      </section>

      <section
        id="projects"
        className="min-h-screen p-10 bg-[#222] text-white flex flex-col justify-center"
      >
        <h2 className="text-4xl mb-4">Projects</h2>
        <p>Here are some of my projects showcasing frontend and full-stack work.</p>
      </section>

      <section
        id="contact"
        className="min-h-screen p-10 bg-[#333] text-white flex flex-col justify-center"
      >
        <h2 className="text-4xl mb-4">Contact</h2>
        <p>Contact me via email or social media links above.</p>
      </section>
    </div>
  );
};

export default Hero;