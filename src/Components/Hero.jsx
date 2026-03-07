import React, { useState, useRef, useEffect } from "react";
import Jahid from "../img/Jahid-Hossen-JahidHossen.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
/* ================= SOCIAL ICONS ================= */
const socialIcons = [
  { Icon: FaLinkedin, hover: "hover:text-blue-400", href: "#" },
  { Icon: FaGithub, hover: "hover:text-black", href: "#" },
  { Icon: FaTwitter, hover: "hover:text-sky-300", href: "#" },
  { Icon: FaInstagram, hover: "hover:text-pink-400", href: "#" },
];

/* ================= HERO COMPONENT ================= */
const Hero = () => {
    const sectionsRef = useRef([]);
useEffect(() => {

  const sections = sectionsRef.current;

  sections.forEach((section, i) => {

    if (!section) return;

    // last section pin করব না
    if (i === sections.length - 1) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true
    });

  });

}, []);

useEffect(() => {

  const sections = sectionsRef.current.filter(Boolean);

  sections.forEach((section, index) => {

    if (index === sections.length - 1) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
    });

  });

}, []);

  useEffect(() => {
    const heroText = sectionsRef.current[0]?.querySelectorAll(
      "div.flex-1 > *"
    );
    if (!heroText) return;

    gsap.from(heroText, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);
  // ====================================
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

    if (isMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");

      gsap.set(overlayRef.current, { display: "block" });

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
      });

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
  }, [isMenuOpen]);

  return (
<section className=" bg-[#191919] w-full min-h-screen">
      <div id="home" className="relative ">
      {/* ================= NAVBAR ================= */}
<div>
        <nav className="fixed top-0 left-0 right-0 z-[9999] px-6 py-4 flex justify-between items-center text-white">
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
      {/* ================= MENU OVERLAY ================= */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        style={{ display: "none", opacity: 0 }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ================= SIDE MENU ================= */}
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
      

</div>

      {/* ================= HERO SECTION ================= */}

    </div>

    <section className="">
         <h1 className="   ">bangla</h1>
    </section>
</section>

      

 
  );
};

export default Hero;