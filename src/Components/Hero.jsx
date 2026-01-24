import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import logo from "../img/jh-logo-jahid-hossen-shakil.png";
import JahidHossen from "../img/Jahid-Hossen-JahidHossen.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaAward } from 'react-icons/fa';
  const socialIcons = [
    { Icon: FaLinkedin,  hover: 'hover:text-blue-400', href: '#' },
    { Icon: FaGithub,  hover: 'hover:text-balck', href: '#' },
    { Icon: FaTwitter,  hover: 'hover:text-sky-300', href: '#' },
    { Icon: FaInstagram, hover: 'hover:text-pink-400', href: '#' },
  ];
/* ================= PARTICLE BACKGROUND ================= */
const ParticleBackground = () => {

  // ================================
  const points = useRef();
  const count = 1700;

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
     
    const radius = 2;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={points} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#0AE448"
        size={0.01}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.2}
      />
    </Points>
  );
};

/* ================= HERO COMPONENT ================= */
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
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

  /* ===== GSAP MENU & OVERLAY ANIMATION ===== */
  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";

      // Overlay animation
      gsap.set(overlayRef.current, {
        display: "block",
        opacity: 0
      });
      
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });

      // Menu animation
      gsap.set(menuRef.current, {
        x: "100%",
        display: "block"
      });
      gsap.set(itemsRef.current, {
        x: 40,
        opacity: 0
      });

      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.65,
        ease: "power4.out",
      });

      gsap.to(itemsRef.current, {
        x: 0,
        opacity: 1,
        stagger: 0.09,
        delay: 0.25,
        duration: 0.55,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "auto";

      // Overlay animation
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        }
      });

      // Menu animation
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.55,
        ease: "power4.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="relative bg-[#191919] w-full min-h-screen md:h-screen overflow-hidden">
      {/* NAVBAR */}
      <nav className="absolute top-2 left-0 right-0 z-40 px-4 py-4 sm:px-6 sm:py-6">
        <div className="max-w-[1800px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center text-center gap-2 sm:gap-6 md:gap-12 text-white">
          <div className="flex items-center gap-4">


  <h2 className="text-2xl  sm:text-3xl text-white">
  <span className="font-bold text-[#0AE448] font-[var(--font-BebasNeue)]">
    Jahid
  </span>
  <span className="font-semibold text-[#0AE448]  font-[var(--font-Cabin)] ml-1">
    Hossen
  </span>
</h2>

</div>
           <h6 className="text-sm sm:text-lg md:text-xl 
               flex flex-col sm:flex-row 
               items-center sm:items-end 
               gap-2 sm:gap-4 md:gap-6 
               text-[#FFFCE1]
               text-right sm:justify-end 
               font-[var(--font-Cabin)]
               w-full">
  <span>+8801777169849</span>

  <span className="hidden sm:inline-block rotate-[25deg] text-[#0AE448] text-2xl md:text-3xl">
    |
  </span>

  <span className="text-sm sm:text-lg md:text-xl text-[#FFFCE1] font-[var(--font-Cabin)]">
    contactjahiddev@gmail.com
  </span>
</h6>

          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 w-10 h-10 sm:w-10 sm:h-10 relative z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col justify-center items-center w-full h-full">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        style={{ display: "none" }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* SLIDE MENU */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-screen w-full sm:w-[85%] md:w-[380px] bg-[#0AE448] backdrop-blur-xl text-white z-50"
        style={{ display: "none" }}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl sm:text-4xl opacity-70 hover:opacity-100 transition-opacity z-50"
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="flex flex-col justify-center h-full px-6 sm:px-10 space-y-4 sm:space-y-7 text-lg sm:text-2xl font-light">
          {menuItems.map((item, i) => (
            <div
              key={item}
              ref={(el) => (itemsRef.current[i] = el)}
              onClick={() => {
                setActiveItem(item);
                setIsMenuOpen(false);
              }}
              className="relative cursor-pointer pl-6 sm:pl-8 hover:text-blue-400 transition-colors duration-300 group"
            >
              {activeItem === item && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse" />
              )}
              <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-center">
          <h6 className="text-xs sm:text-sm opacity-50">
            © Shohelranabaig 2025. All Rights Reserved
          </h6>
        </div>
      </div>

      {/* MAIN CONTENT */}
<div className="relative z-20 min-h-screen flex ml-10  px-4">
  <div className="max-w-6xl w-full flex flex-col lg:flex-row mt-31 gap-10 text-[#FFFCE1]">
    
    {/* LEFT: TEXT */}
    <div className="flex flex-col items-start gap-4">
      
      <h4 className="font-blinkma uppercase text-left text-[clamp(24px,3vw,56px)]">
        <span className="text-[#0AE448]">Hi,</span> I am Jahid
      </h4>

      <h1
        className="
          font-BebasNeue
          text-left
          leading-none
          whitespace-nowrap
          text-[clamp(52px,9vw,140px)]
        "
      >
        FRONTEND AND <br />
        <span className="block">MERN STACK DEVELOPER</span>
      </h1>
<h6 className="text-2xl font-Cabin   leading-relaxed mb-3">
  I am a Frontend and MERN Stack Developer with strong experience in building modern, responsive, and performance-driven web applications. I specialize in creating clean user interfaces, writing scalable and maintainable code, and developing full-stack solutions using React, Node.js, Express, and MongoDB. My goal is to deliver secure, fast, and user-friendly websites that help businesses grow and succeed online.
</h6>

<h6 className=" text-1xl mt-40 font-Cabin  ">
  © Jahid hossen 2026. All rights reserved.
</h6>


    </div>

    {/* RIGHT: IMAGE */}
<div className="flex-shrink-0  rounded-[5px] p-2 mb-100  flex justify-center items-center">
<div className="relative">
<div className="relative inline-block">
  <img
    src={JahidHossen}
    alt="Jahid Hossen"
    className="w-[220px] sm:w-[280px] md:w-[340px] mt-42 pb-20 lg:w-[650px] object-cover rounded-lg  opacity-90"
    />
  <div className="absolute inset-0 shadow-[0_10px_30px_rgba(0,0,0,0.60),0_6px_6px_rgba(0,0,0,0.40)] rounded-lg mix-blend-multiply">
 <div className="flex items-center justify-between p-6 backdrop-blur-sm rounded-xl  ">
      {/* Social Icons */}
      <div className="flex space-x-3">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className={`p-2 rounded-lg  ${social.color} ${social.hover} transition-all duration-300 transform hover:scale-110`}
          >
            <social.Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Experience Badge */}
      <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r  rounded-lg  ">
        <FaAward className="w-12 h-12 text-[#0AE448]" />
        <div>
        <div className="flex items-baseline gap-1">
  <span className="text-3xl font-bold  font-BebasNeue ">3</span> 
  <span className="text-2xl tracking-wide font-Cabin ">
    Years Experience
    
  </span>
 
</div>

        </div>
      </div>
    </div>
  </div>
</div>
  {/* Bottom opacity overlay - stronger version */}
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/70 to-transparent mix-blend-multiply rounded-b-lg pointer-events-none opacity-80">
   
    </div>
</div>
</div>

  </div>
</div>








      {/* PARTICLES BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }} gl={{ antialias: true, preserveDrawingBuffer: true }}>
          <ambientLight intensity={0.8} />
          <ParticleBackground />
        </Canvas>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;