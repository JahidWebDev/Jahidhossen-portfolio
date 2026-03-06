import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Specialization = () => {

  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "GSAP Animations",
  ];

  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from("h1", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from("p", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(skillsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className="scroll-smooth">

      <section
        className="w-full sticky top-0 z-50 min-h-screen bg-[#bb2e2e] flex flex-col items-center justify-center px-5 py-20 text-center"
      >

        <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#0AE448] mb-5 font-bold tracking-wide uppercase">
          Specialization
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-12 leading-relaxed text-gray-300">
          I specialize in building modern web applications with React, and full-stack MERN projects using Node.js, Express, and MongoDB. My focus is on performance, scalability, and clean user interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
              className="relative group px-6 py-3 bg-[#0AE448]/10 backdrop-blur-sm border-2 border-[#0AE448] rounded-2xl font-semibold text-[#0AE448] transition-transform duration-300 hover:scale-110 hover:bg-[#0AE448]/20 hover:shadow-lg"
            >
              <span className="relative z-10">{skill}</span>

              <div className="absolute inset-0 bg-gradient-to-r from-[#0AE448]/20 via-transparent to-[#0AE448]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

      </section>

    </section>
  );
};

export default Specialization;