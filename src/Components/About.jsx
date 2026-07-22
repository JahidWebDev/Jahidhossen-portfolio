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
      id="about"
      ref={sectionRef}
      className="bg-white py-20 px-6 md:px-10  lg:left-72 lg:px-20"
      style={{ fontFamily: "blinkma" }}
    >
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
                w-full
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

        {/* ========= FACTS SECTION START HERE ========= */}
                {/* ================= FACTS ================= */}

        <div className="mt-24">

          <h2 className="text-5xl font-bold text-[#c33201]">
            Facts
          </h2>

          <div className="w-20 h-1 rounded-full bg-[#c33201] mt-5"></div>

          <p className="mt-8 text-gray-600 leading-8 max-w-6xl">
            Experienced in developing scalable web applications using
            both front-end and back-end technologies. Committed to
            clean code, performance optimization, and delivering
            solutions that enhance user experience across various
            industries.
          </p>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

            {/* Card 1 */}

            <div
              className="
              bg-white
              rounded-2xl
              p-8
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-3
            "
            >
              <div className="w-16 h-16 rounded-full bg-[#c33201]/10 flex items-center justify-center">
                <FaSmile className="text-3xl text-[#c33201]" />
              </div>

              <h3 className="text-5xl font-bold mt-6 text-gray-800">
                2673
              </h3>

              <h4 className="mt-4 text-xl font-semibold">
                Happy Clients
              </h4>

              <p className="text-gray-500 mt-2">
                Clients and Trainees
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="
              bg-white
              rounded-2xl
              p-8
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-3
            "
            >
              <div className="w-16 h-16 rounded-full bg-[#c33201]/10 flex items-center justify-center">
                <FaClipboardList className="text-3xl text-[#c33201]" />
              </div>

              <h3 className="text-5xl font-bold mt-6 text-gray-800">
                32
              </h3>

              <h4 className="mt-4 text-xl font-semibold">
                Projects
              </h4>

              <p className="text-gray-500 mt-2">
                Business Website
              </p>
            </div>

            {/* Card 3 */}

            <div
              className="
              bg-white
              rounded-2xl
              p-8
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-3
            "
            >
              <div className="w-16 h-16 rounded-full bg-[#c33201]/10 flex items-center justify-center">
                <FaHeadset className="text-3xl text-[#c33201]" />
              </div>

              <h3 className="text-5xl font-bold mt-6 text-gray-800">
                12
              </h3>

              <h4 className="mt-4 text-xl font-semibold">
                Experiences
              </h4>

              <p className="text-gray-500 mt-2">
                Design & Development
              </p>
            </div>

            {/* Card 4 */}

            <div
              className="
              bg-white
              rounded-2xl
              p-8
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-3
            "
            >
              <div className="w-16 h-16 rounded-full bg-[#c33201]/10 flex items-center justify-center">
                <FaAward className="text-3xl text-[#c33201]" />
              </div>

              <h3 className="text-5xl font-bold mt-6 text-gray-800">
                4
              </h3>

              <h4 className="mt-4 text-xl font-semibold">
                Awards
              </h4>

              <p className="text-gray-500 mt-2">
                Academic Awards
              </p>
            </div>

          </div>

        </div>

        {/* ================= SKILLS START ================= */}
                {/* ================= SKILLS ================= */}

        <div className="mt-24">

          <h2 className="text-5xl font-bold text-[#c33201]">
            Skills
          </h2>

          <div className="w-20 h-1 rounded-full bg-[#c33201] mt-5"></div>

          <p className="mt-8 text-gray-600 leading-8 max-w-6xl">
            Full Stack Web Developer with expertise in front-end
            technologies (React.js, HTML, CSS, JavaScript) and
            back-end development (Node.js, Express.js, MongoDB).
            Passionate about building scalable, responsive and
            user-friendly applications.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mt-14">

            {/* Left Column */}

            <div className="space-y-7">

              <Skill title="HTML" value="100" />

              <Skill title="CSS / SCSS" value="95" />

              <Skill title="JavaScript" value="95" />

              <Skill title="TypeScript" value="90" />

              <Skill title="React.js" value="90" />

              <Skill title="Next.js" value="90" />

            </div>

            {/* Right Column */}

            <div className="space-y-7">

              <Skill title="Node.js" value="85" />

              <Skill title="PHP" value="85" />

              <Skill title="Python" value="80" />

              <Skill title="Java" value="75" />

              <Skill title="Adobe (PS, AI, XD, PR)" value="85" />

              <Skill title="R (Data Analytics)" value="80" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ================= Skill Component ================= */

function Skill({ title, value }) {
  return (
    <div>

      <div className="flex justify-between mb-2">

        <span className="font-semibold uppercase tracking-wide">
          {title}
        </span>

        <span className="font-bold text-[#c33201]">
          {value}%
        </span>

      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        <div
          className="h-full rounded-full bg-[#c33201] transition-all duration-1000"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}

export default About;