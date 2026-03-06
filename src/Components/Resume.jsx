import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const containerRef = useRef(null);

  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "GSAP Animations",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      const panels = gsap.utils.toArray(".panel");

      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: true
        });
      });

    }, containerRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={containerRef} className="relative z-[50000]">

      {/* SECTION 1 */}
      <section className="panel w-full min-h-screen bg-[#191919] text-white flex flex-col items-center justify-center px-5 py-20 text-center">

        <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#0AE448] mb-5 font-bold">
          Specialization
        </h2>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
          I specialize in Frontend Development using React, and MERN stack
          applications with Node.js, Express, and MongoDB.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 border-2 border-[#0AE448] rounded-lg font-bold text-[#0AE448] hover:bg-[#0AE448] hover:text-[#191919] transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 2 */}
      <section className="panel w-full min-h-screen bg-[#111] text-white flex items-center justify-center">
        <h2 className="text-5xl text-[#0AE448] font-bold">
          Next Section
        </h2>
      </section>

      {/* SECTION 3 */}
      <section className="panel w-full min-h-screen bg-[#000] text-white flex items-center justify-center">
        <h2 className="text-5xl text-[#0AE448] font-bold">
          Another Section
        </h2>
      </section>

    </section>
  );
};

export default Resume;