import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ResumePage() {
  return (
    <section
      id="resume"
      className="relative py-20  bg-[#f8f8f8] overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(195,50,1,.08) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(195,50,1,.08) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(195,50,1,.08) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(195,50,1,.08) 75%)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition:
            "0 0,0 20px,20px -20px,-20px 0",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12 lg:right-20">

        {/* Heading */}

        <div className="mb-20">

          <p className="uppercase tracking-[6px] font-semibold text-[#c33201]">
            My Resume
          </p>

          <h1
            className="text-5xl lg:text-7xl mt-4"
            style={{ fontFamily: "BebasNeue" }}
          >
            Resume
          </h1>

          <div className="w-24 h-1 bg-[#c33201] rounded-full mt-5"></div>

          <p className="mt-8 text-gray-600 max-w-4xl leading-8">
            Explore my professional journey as a MERN Stack Developer,
            showcasing my education, technical skills, professional
            experience and passion for building modern web applications.
          </p>

        </div>

        {/* Two Column */}

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-bold mb-10">
              Summary
            </h2>

            <div className="relative border-l-2 border-[#c33201] pl-8">

              <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full border-4 border-[#c33201] bg-white"></div>

              <div className="pb-16">

                <h3 className="text-3xl font-bold uppercase">
                  Jahid Hossen
                </h3>

                <p className="italic text-gray-500 mt-6 leading-8">
                  Passionate MERN Stack Developer specializing in
                  modern, responsive and scalable web applications.
                  I enjoy transforming ideas into fast, secure and
                  user-friendly digital experiences using the latest
                  web technologies.
                </p>

                <ul className="mt-8 space-y-5">

                  <li className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-[#c33201]" />
                    <span>Dhaka, Bangladesh</span>
                  </li>

                  <li className="flex items-center gap-4">
                    <FaPhoneAlt className="text-[#c33201]" />
                    <span>+880 1777-169849</span>
                  </li>

                  <li className="flex items-center gap-4">
                    <FaEnvelope className="text-[#c33201]" />
                    <span>contactjahiddev@gmail.com</span>
                  </li>

                  <li className="flex items-center gap-4">
                    <FaGlobe className="text-[#c33201]" />
                    <a
                      href="https://jahidhossen-portfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c33201] hover:underline"
                    >
                      jahidhossen-portfolio.vercel.app
                    </a>
                  </li>

                </ul>

              </div>
{/* ========================= */}
{/* Professional Experience */}
{/* ========================= */}

<div className="relative border-l-2 border-[#c33201] pl-8">

  {/* Experience 01 */}
  <h2 className="text-4xl font-bold mb-10">
              Professional Experience
            </h2>

  <div className="relative pb-14">

    <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#c33201] shadow-lg"></div>

    <h3 className="text-2xl font-bold">
      MERN Stack Developer
    </h3>

    <span className="inline-block mt-4 px-4 py-1 rounded-full bg-[#c33201]/10 text-[#c33201] font-semibold">
      2024 - Present
    </span>

    <p className="mt-4 italic text-gray-500">
      Freelance • Bangladesh
    </p>

    <ul className="mt-5 space-y-3 list-disc pl-5 text-gray-600 leading-7">

      <li>
        Developed modern MERN Stack web applications using
        React.js, Node.js, Express.js and MongoDB.
      </li>

      <li>
        Built scalable REST APIs with JWT Authentication
        and role-based authorization.
      </li>

      <li>
        Integrated Firebase Authentication, Cloudinary
        image upload and MongoDB Database.
      </li>

      <li>
        Designed responsive user interfaces using
        Tailwind CSS and React.js.
      </li>

      <li>
        Deployed applications on Vercel and Render.
      </li>

    </ul>

  </div>

  {/* Experience 02 */}

  <div className="relative pb-14">

    <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#c33201] shadow-lg"></div>

    <h3 className="text-2xl font-bold">
      Frontend Developer
    </h3>

    <span className="inline-block mt-4 px-4 py-1 rounded-full bg-[#c33201]/10 text-[#c33201] font-semibold">
      2023 - Present
    </span>

    <p className="mt-4 italic text-gray-500">
      Personal & Client Projects
    </p>

    <ul className="mt-5 space-y-3 list-disc pl-5 text-gray-600 leading-7">

      <li>
        Converted Figma and PSD designs into pixel-perfect
        responsive websites.
      </li>

      <li>
        Built reusable React components for scalable projects.
      </li>

      <li>
        Added GSAP and Framer Motion animations for
        interactive user experiences.
      </li>

      <li>
        Optimized websites for SEO, accessibility
        and high performance.
      </li>

    </ul>

  </div>

 

</div>
            </div>

            {/* ========= Education Part Next ========= */}

          </div>

          {/* RIGHT */}

          <div>

          
           {/* ========================= */}
{/* Education */}
{/* ========================= */}

<h2 className="text-4xl font-bold mt-20 mb-10">
  Education
</h2>

<div className="relative border-l-2 border-[#c33201] pl-8">

  {/* SSC */}

  <div className="relative pb-14">

    <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#c33201] shadow-lg"></div>

    <h3 className="text-2xl font-bold">
      Secondary School Certificate (SSC)
    </h3>

    <span className="inline-block mt-4 px-4 py-1 rounded-full bg-[#c33201]/10 text-[#c33201] font-semibold">
      2016
    </span>

    <p className="mt-4 italic text-gray-500">
      Jatrabari Ideal School & College, Dhaka
    </p>

    <ul className="mt-5 space-y-3 list-disc pl-5 text-gray-600 leading-7">
      <li>
        Successfully completed Secondary School Certificate (SSC).
      </li>

      <li>
        Built a solid foundation in mathematics, science,
        communication and problem-solving skills.
      </li>

      <li>
        Participated in academic, cultural and extracurricular activities.
      </li>
    </ul>

  </div>

  {/* HSC */}

  <div className="relative pb-14">

    <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#c33201] shadow-lg"></div>

    <h3 className="text-2xl font-bold">
      Higher Secondary Certificate (HSC)
    </h3>

    <span className="inline-block mt-4 px-4 py-1 rounded-full bg-[#c33201]/10 text-[#c33201] font-semibold">
      2017 - 2018
    </span>

    <p className="mt-4 italic text-gray-500">
      Ideal College, Dhanmondi
    </p>

    <ul className="mt-5 space-y-3 list-disc pl-5 text-gray-600 leading-7">
      <li>
        Completed Higher Secondary education in Business Studies.
      </li>

      <li>
        Strengthened analytical thinking, communication
        and business knowledge.
      </li>

      <li>
        Participated in teamwork, presentations and academic projects.
      </li>
    </ul>

  </div>

  {/* BBS */}

  <div className="relative">

    <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-white border-4 border-[#c33201] shadow-lg"></div>

    <h3 className="text-2xl font-bold">
      Bachelor of Business Studies (BBS)
    </h3>

    <span className="inline-block mt-4 px-4 py-1 rounded-full bg-[#c33201]/10 text-[#c33201] font-semibold">
      2019 - 2020
    </span>

    <p className="mt-4 italic text-gray-500">
      Tejgaon College, Dhaka
    </p>

    <ul className="mt-5 space-y-3 list-disc pl-5 text-gray-600 leading-7">
      <li>
        Completed Bachelor of Business Studies successfully.
      </li>

      <li>
        Developed business management, leadership
        and communication skills.
      </li>

      <li>
        Worked on research, presentations and collaborative projects.
      </li>
    </ul>

  </div>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ResumePage;