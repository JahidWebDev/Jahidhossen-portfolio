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
     id="about" ref={sectionRef} className=" glow bg-white py-20 px-6 md:px-10 lg:left-72 lg:px-20   isolate
   
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

          

  <p className="mt-6 font-Cabin text-gray-600 leading-8 text-lg max-w-6xl">
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
                bg-[#111]
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
<section className="py-10  relative overflow-hidden">


  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="text-center">


      <h2 className="text-5xl  text-[#c33201] font-BebasNeue lg:text-7xl font-bold mt-3">
        Technical Expertise
      </h2>

      <p className="text-gray-600 font-Cabin max-w-3xl mx-auto mt-6 leading-8">
        Full Stack Web Developer with expertise in modern frontend,
        backend and UI/UX technologies. Passionate about creating
        scalable, responsive and high-performance applications.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-12">

      <Skill title="HTML" value={100} />
      <Skill title="CSS / SCSS" value={95} />
      <Skill title="Bootstrap" value={95} />
      <Skill title="Tailwind CSS" value={100} />
      <Skill title="Git & Github" value={95} />
      <Skill title="JavaScript" value={95} />
      <Skill title="React.js" value={95} />
      <Skill title="Next.js" value={90} />
      <Skill title="TypeScript" value={88} />
      <Skill title="Node.js" value={90} />
      <Skill title="Express.js" value={90} />
      <Skill title="MongoDB" value={90} />
      <Skill title="Mongoose" value={88} />
      <Skill title="Adobe (PS, AI, XD, PR)" value={85} />

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

export function Skill({ title, value }) {
  const isMobile = useMediaQuery({
    maxWidth: 768,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={
        !isMobile
          ? {
              y: -4,
            }
          : {}
      }
      className="
    bg-white/20
  backdrop-blur-md
  border
  border-white/30
  rounded-2xl
  shadow-[0_8px_32px_rgba(0,0,0,0.12)]
  hover:bg-white/30
  hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
  transition-all
  duration-300
  p-4
  will-change-transform
"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold font-blinkma text-base md:text-lg text-gray-800">
          {title}
        </h3>

        <span className="font-bold font-Cabin text-[#c33201] text-sm md:text-base">
          {value}%
        </span>
      </div>

      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            relative
            h-full
            rounded-full
            overflow-hidden
            bg-gradient-to-r
            from-[#c33201]
            
            to-[#00a5f1]
          "
        >
          {/* Desktop only Shine Effect */}
          {!isMobile && (
            <motion.div
              animate={{
                x: ["-100%", "150%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-y-0
                w-10
                bg-white/30
                blur-sm
                rotate-12
              "
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;