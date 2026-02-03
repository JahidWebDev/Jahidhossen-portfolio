import React from "react";

const Specialization = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "GSAP Animations",
  ];

  return (
    <section className="w-full min-h-screen bg-[#191919] text-white flex flex-col items-center justify-center px-5 py-20 text-center">
      <h2 className="text-4xl md:text-6xl text-[#0AE448] mb-5 font-bold">
        Specialization
      </h2>

      <p className="max-w-3xl mb-10 text-lg">
        I specialize in Frontend Development using React, and MERN stack
        applications with Node.js, Express, and MongoDB.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 border-2 border-[#0AE448] rounded-lg font-bold text-[#0AE448]"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialization;
