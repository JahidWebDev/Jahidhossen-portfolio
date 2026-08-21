import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  FaChevronRight,
  FaSmile,
  FaClipboardList,
  FaHeadset,
  FaAward,
} from "react-icons/fa";

import profile from "../img/profile.png";

function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".about-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    gsap.from(".about-image", {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 75%",
      },
    });

    gsap.from(".about-content", {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section 
     id="about" ref={sectionRef} className=" glow bg-[#FFFFFF] py-20 px-3 md:px-10 lg:left-72 lg:px-20   isolate
   
    from-white
    via-[#fffaf8]
    to-[#fff3ef]" style={{ fontFamily: "blinkma" }}
    >

  {/* ===== Premium Background Glow ===== */}
{/* ===== Premium UI Glow Background ===== */}

{/* Grid Pattern */}
  {/* <div
  className="absolute inset-0 opacity-10 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(45deg, rgba(0,0,0,.08) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(0,0,0,.08) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(0,0,0,.08) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(0,0,0,.08) 75%)
    `,
    backgroundSize: "40px 40px",
    backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0",
  }}
/> */}
     <div className="max-w-7xl mx-auto px-4 lg:mr-42">

        {/* Heading */}
        <div className="about-title mb-16">

          <h2 className=" font-BebasNeue text-6xl   font-bold text-[#c33201]">
            About
          </h2>

          

  <p className="mt-6 font-Cabin lg:w-[700px] text-gray-600 leading-8 text-lg max-w-6xl">
  A passionate <span className="font-semibold text-[#c33201]">MERN Stack Developer</span> focused on building modern, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js with clean code, excellent performance, and user-friendly experiences.
</p>

        </div>

        {/* About Grid */}

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left */}

          <div className="about-image">

            <img
              src={profile}
              alt="profile"
              className="
                w-full z-50
                
                rounded-2xl
                bg-[#1F2731]
                shadow-2xl
                object-cover
              "
            />

          </div>

          {/* Right */}

          <div className="about-content">

      <h3 className="text-4xl font-blinkma font-bold text-[#c33201]">
  Full Stack MERN Developer
</h3>

<p className="italic text-gray-500 mt-4 mb-8">
  Transforming ideas into fast, secure, and responsive digital solutions with the MERN Stack.
</p>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-8">

  <div className="flex items-center gap-2 text-sm lg:text-base">
    <FaChevronRight className="text-[#c33201] text-xs flex-shrink-0" />
    <strong className="text-gray-800">Birthday:</strong>
    <span className="text-gray-600">18 June</span>
  </div>

  <div className="flex items-center gap-2 text-sm lg:text-base">
    <FaChevronRight className="text-[#c33201] text-xs flex-shrink-0" />
    <strong className="text-gray-800">Experience:</strong>
    <span className="text-gray-600">5+ Years</span>
  </div>

  

  <div className="flex items-center gap-2 text-sm lg:text-base">
    <FaChevronRight className="text-[#c33201] text-xs flex-shrink-0" />
    <strong className="text-gray-800">Training:</strong>
    <span className="text-gray-600">Creative IT Institute</span>
  </div>


  <div className="flex items-center gap-2 text-sm lg:text-base">
    <FaChevronRight className="text-[#c33201] text-xs flex-shrink-0" />
    <strong className="text-gray-800">Phone:</strong>
    <a
      href="tel:+8801777169849"
      className="text-gray-600 hover:text-[#c33201] transition"
    >
      +880 1777-169849
    </a>
  </div>

<div className="flex items-center gap-2 text-sm lg:text-base">
  <FaChevronRight className="text-[#c33201] text-xs flex-shrink-0" />

  <strong className="text-gray-800 flex-shrink-0">
    Email:
  </strong>

  <a
    href="mailto:contactjahiddev@gmail.com"
    className="
      text-gray-600
      hover:text-[#c33201]
      transition
      text-xs
      lg:text-sm
      break-words
    "
  >
    contactjahiddev@gmail.com
  </a>
</div>

  <div className="flex items-center gap-2 text-sm lg:text-base">
    <FaChevronRight className="text-[#c33201] text-xs flex-shrink-0" />
    <strong className="text-gray-800">Location:</strong>
    <span className="text-gray-600">Dhaka, Bangladesh</span>
  </div>

  <div className="flex items-center gap-2 text-sm lg:text-base">
    <FaChevronRight className="text-[#c33201] text-xs flex-shrink-0" />
    <strong className="text-gray-800">Freelance:</strong>
    <span className="text-green-600 font-semibold">Available</span>
  </div>

</div>
         <div className="mt-10 font-Cabin space-y-6 text-gray-600 leading-8">

  <p>
    I specialize in building modern, responsive, and scalable web
    applications using the MERN Stack. My focus is on creating
    clean, efficient, and user-friendly solutions that deliver
    excellent performance across all devices.
  </p>

  <p>
    Experienced with MongoDB, Express.js, React.js, Node.js,
    JavaScript (ES6+), Next.js, Tailwind CSS, Firebase,
    REST APIs, Git, GitHub, and responsive UI development,
    delivering secure and production-ready web applications.
  </p>

</div>

          </div>

        </div>

       


                {/* ================= SKILLS ================= */}
{/* ================= SKILLS ================= */}
<section className="relative overflow-hidden py-10 sm:py-12 lg:py-10">

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

    {/* =========================
        HEADING
        ========================= */}

    <div className="text-center">

      <h2
        className="
          text-4xl
          sm:text-5xl
          text-[#c33201]
          font-BebasNeue
          lg:text-7xl
          font-bold
          mt-3
          leading-tight
        "
      >
        Technical Expertise
      </h2>

      <p
        className="
          mt-6
          font-Cabin
          text-gray-600
          leading-8
          lg:w-[900px]
          text-lg
          max-w-6xl
          mx-auto
          
        "
      >
        Full Stack Web Developer with expertise in modern frontend,
        backend and UI/UX technologies. Passionate about creating
        scalable, responsive and high-performance applications.
      </p>

    </div>


    {/* =========================
        SKILLS
        ========================= */}

    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-x-8
        gap-y-5
        lg:gap-y-6
        mt-10
        sm:mt-12
        lg:mt-14
        items-center
      "
    >

      {/* =========================
          LEFT COLUMN
          ========================= */}

      <div className="flex flex-col gap-5 lg:gap-6">

        <Skill
          title="HTML"
          value={100}
          color="bg-[#FF0000]"
        />

        <Skill
          title="CSS / SCSS"
          value={95}
          color="bg-[rgb(255,99,71)]"
        />

        <Skill
          title="Bootstrap"
          value={95}
          color="bg-[#87B9E8]"
        />

        <Skill
          title="Tailwind CSS"
          value={100}
          color="bg-[#FFB20F]"
        />

        <Skill
          title="Git & Github"
          value={95}
          color="bg-[#D985AA]"
        />

        <Skill
          title="JavaScript"
          value={95}
          color="bg-[#70D1D1]"
        />

        <Skill
          title="React.js"
          value={95}
          color="bg-[#B5DDEF]"
        />

      </div>


      {/* =========================
          RIGHT COLUMN
          ========================= */}

      <div className="flex flex-col gap-5 lg:gap-6">

        <Skill
          title="Next.js"
          value={90}
          color="bg-[#C2A7C8]"
        />

        <Skill
          title="TypeScript"
          value={88}
          color="bg-[#718EF0]"
        />

        <Skill
          title="Node.js"
          value={90}
          color="bg-[#C2B39B]"
        />

        <Skill
          title="Express.js"
          value={90}
          color="bg-[#FFF19A]"
        />

        <Skill
          title="MongoDB"
          value={90}
          color="bg-[#8BA67D]"
        />

        <Skill
          title="Mongoose"
          value={88}
          color="bg-[#B9DCEC]"
        />

        <Skill
          title="Adobe (PS, AI, XD, PR)"
          value={85}
          color="bg-[#D8D8D8]"
        />

      </div>

    </div>

  </div>

</section>

      </div>
    </section>
  );
}

/* ================= Skill Component ================= */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Skill({ title, value, color, className = "" }) {
  return (
    <div
      className={`
        group
        relative
        flex
        items-center
        justify-between
        w-full
        min-h-[58px]
        px-5
        sm:px-7
        lg:px-8
        py-3
        rounded-[10px]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${color}
        ${className}
      `}
    >
      {/* Skill Name */}
      <h3
        className="
          text-lg
          sm:text-xl
          lg:text-2xl
          font-semibold
          text-black
          tracking-wide
        "
        style={{ fontFamily: "Cabin" }}
      >
        {title}
      </h3>

      {/* Percentage */}
      <span
        className="
          shrink-0
          ml-4
          min-w-[68px]
          text-center
          px-4
          py-1
          rounded-full
          bg-white/45
          text-black
          text-xs
          sm:text-sm
          font-medium
          backdrop-blur-sm
        "
        style={{ fontFamily: "Cabin" }}
      >
        {value}%
      </span>
    </div>
  );
}





export default About;