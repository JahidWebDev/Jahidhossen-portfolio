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
    bg-gradient-to-br
    from-white
    via-[#fffaf8]
    to-[#fff3ef]" style={{ fontFamily: "blinkma" }}
    >

  {/* ===== Premium Background Glow ===== */}
{/* ===== Premium UI Glow Background ===== */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      /* Top */
      radial-gradient(circle at 50% 0%, rgba(195,50,1,.12), transparent 30%),

      /* Bottom */
      radial-gradient(circle at 50% 100%, rgba(255,140,0,.10), transparent 30%),

      /* Left */
      radial-gradient(circle at 0% 50%, rgba(255,90,31,.10), transparent 28%),

      /* Right */
      radial-gradient(circle at 100% 50%, rgba(255,180,0,.10), transparent 28%),

      /* Top Left */
      radial-gradient(circle at 10% 10%, rgba(195,50,1,.08), transparent 22%),

      /* Top Right */
      radial-gradient(circle at 90% 10%, rgba(255,180,0,.08), transparent 22%),

      /* Bottom Left */
      radial-gradient(circle at 10% 90%, rgba(255,120,120,.08), transparent 22%),

      /* Bottom Right */
      radial-gradient(circle at 90% 90%, rgba(255,140,0,.08), transparent 22%)
    `,
  }}
/>
{/* Grid Pattern */}
<div
  className="absolute inset-0 pointer-events-none opacity-30"
  style={{
    backgroundImage: `
      linear-gradient(45deg, rgba(195,50,1,.08) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(195,50,1,.08) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(195,50,1,.08) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(195,50,1,.08) 75%)
    `,
    backgroundSize: "40px 40px",
    backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0",
  }}
/>

     <div className="max-w-7xl mx-auto px-4 lg:mr-42">

        {/* Heading */}
        <div className="about-title mb-16">

          <h2 className="text-5xl font-BebasNeue text-6xl   font-bold text-[#c33201]">
            About
          </h2>

          <div className="w-20 h-1 rounded-full bg-[#c33201] mt-5"></div>

          <p className="mt-8 text-gray-600 leading-8 text-lg max-w-6xl">
            A highly motivated website and app designer, developer,
            and data analyst with a strong passion for creating
            innovative web and mobile applications and uncovering
            valuable insights from data.
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
              Website/App Designer & Developer
            </h3>

            <p className="italic text-gray-500 mt-4 mb-8">
              Provide individual and business IT solution -
              to infinity and beyond
            </p>

            <div className="grid md:grid-cols-2 gap-y-5 gap-x-10">

              <div className="flex items-center gap-3">
                <FaChevronRight className="text-[#c33201]" />
                <strong>Birthday:</strong>
                <span>18 June</span>
              </div>

              <div className="flex items-center gap-3">
                <FaChevronRight className="text-[#c33201]" />
                <strong>Experience:</strong>
                <span>10 Year+</span>
              </div>

              <div className="flex items-center gap-3">
                <FaChevronRight className="text-[#c33201]" />
                <strong>Website:</strong>
                <span>www.dstudiotech.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaChevronRight className="text-[#c33201]" />
                <strong>Degree:</strong>
                <span>Master of IT</span>
              </div>

              <div className="flex items-center gap-3">
                <FaChevronRight className="text-[#c33201]" />
                <strong>Phone:</strong>
                <span>+61 411 356 263</span>
              </div>

              <div className="flex items-center gap-3">
                <FaChevronRight className="text-[#c33201]" />
                <strong>Email:</strong>
                <span>davidfan618@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaChevronRight className="text-[#c33201]" />
                <strong>City:</strong>
                <span>Brisbane, Australia</span>
              </div>

              <div className="flex items-center gap-3">
                <FaChevronRight className="text-[#c33201]" />
                <strong>Freelance:</strong>
                <span className="text-green-600 font-semibold">
                  Available
                </span>
              </div>

            </div>

            <div className="mt-10 space-y-6 text-gray-600 leading-8">

              <p>
                Extensive education and experience in application
                development have equipped me with advanced technical
                expertise including Data Analytics, UI/UX Design,
                Full Stack Development and Database Management.
              </p>

              <p>
                Skilled in React.js, Next.js, Vue.js, Node.js,
                Express.js, PHP, Python, Java, SQL, MongoDB,
                Adobe Creative Suite, Power BI, Excel,
                Git and many modern web technologies.
              </p>

            </div>

          </div>

        </div>

       


                {/* ================= SKILLS ================= */}
{/* ================= SKILLS ================= */}
<section className="py-10  relative overflow-hidden">


  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="text-center">

      <span className="uppercase tracking-[6px] text-[#c33201] font-semibold">
        My Skills
      </span>

      <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-3">
        Technical Expertise
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
        Full Stack Web Developer with expertise in modern frontend,
        backend and UI/UX technologies. Passionate about creating
        scalable, responsive and high-performance applications.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-20">

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
        bg-white/50
        rounded-xl
        border border-gray-100
        shadow-md
        hover:shadow-xl
        p-4
        transition-all
        duration-300
        will-change-transform
      "
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-base md:text-lg text-gray-800">
          {title}
        </h3>

        <span className="font-bold text-[#c33201] text-sm md:text-base">
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
            via-orange-500
            to-blue-500
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