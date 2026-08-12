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

<div className="relative max-w-7xl mx-auto px-7 sm:px-5 md:px-8 lg:px-12 lg:right-20">

  {/* =====================================================
      HEADING
      ===================================================== */}

  <div className="mb-10 lg:mb-12">

    <h1
      className="
       font-BebasNeue text-6xl   font-bold text-[#c33201]
      "
      style={{ fontFamily: "BebasNeue" }}
    >
      Resume
    </h1>

    <p
      className="
        mt-6 font-Cabin text-gray-600 leading-8 text-lg max-w-6xl
      "
    >
      Explore my professional journey as a MERN Stack Developer,
      showcasing my education, technical skills, professional
      experience and passion for building modern web applications.
    </p>

  </div>


  {/* =====================================================
      TWO COLUMN
      LG DESIGN UNCHANGED
      MOBILE = SINGLE COLUMN
      ===================================================== */}

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">


    {/* =====================================================
        LEFT COLUMN
        ===================================================== */}

    <div>

      {/* =========================
          SUMMARY
          ========================= */}

      <h2
        className="
          text-4xl
          sm:text-4xl
          text-[#c33201]
          font-BebasNeue
          font-bold
          mb-8
          lg:mb-10
        "
      >
        Summary
      </h2>


      {/* SUMMARY TIMELINE */}

      <div
        className="
          relative
          border-l-0
          lg:border-l-2
          border-[#c33201]
          pl-0
          lg:pl-8
        "
      >

        {/* Timeline Dot - Desktop Only */}

        <div
          className="
            hidden
            lg:block
            absolute
            -left-[10px]
            top-0
            w-5
            h-5
            rounded-full
            border-4
            border-[#c33201]
            bg-white
          "
        ></div>


        <div className="pb-12 lg:pb-16">

          <h3
            className="
              text-2xl
              sm:text-3xl
              font-blinkma
              font-bold
              uppercase
            "
          >
            Jahid Hossen
          </h3>


          <p
            className="
              italic
              font-Cabin
              text-gray-500
              mt-5
              lg:mt-6
              leading-7
              lg:leading-8
              text-sm
              sm:text-base
            "
          >
            Passionate MERN Stack Developer specializing in
            modern, responsive and scalable web applications.
            I enjoy transforming ideas into fast, secure and
            user-friendly digital experiences using the latest
            web technologies.
          </p>


          {/* CONTACT INFORMATION */}

          <ul
            className="
              mt-7
              lg:mt-8
              font-blinkma
              space-y-4
              lg:space-y-5
            "
          >

            <li className="flex items-start gap-3 lg:gap-4">

              <FaMapMarkerAlt
                className="
                  text-[#c33201]
                  mt-1
                  flex-shrink-0
                "
              />

              <span>
                Dhaka, Bangladesh
              </span>

            </li>


            <li className="flex items-start gap-3 lg:gap-4">

              <FaPhoneAlt
                className="
                  font-Cabin
                  text-[#c33201]
                  mt-1
                  flex-shrink-0
                "
              />

              <span>
                +880 1777-169849
              </span>

            </li>


            <li className="flex items-start gap-3 lg:gap-4 min-w-0">

              <FaEnvelope
                className="
                  text-[#c33201]
                  mt-1
                  flex-shrink-0
                "
              />

              <span className="break-all sm:break-normal">
                contactjahiddev@gmail.com
              </span>

            </li>


            <li className="flex items-start gap-3 lg:gap-4 min-w-0">

              <FaGlobe
                className="
                  text-[#c33201]
                  mt-1
                  flex-shrink-0
                "
              />

              <a
                href="https://jahidhossen-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[#c33201]
                  hover:underline
                  break-all
                  sm:break-normal
                "
              >
                jahidhossen-portfolio.vercel.app
              </a>

            </li>

          </ul>

        </div>

      </div>


      {/* =================================================
          PROFESSIONAL EXPERIENCE
          ================================================= */}

      <div
        className="
          relative
          font-blinkma
          border-l-0
          lg:border-l-2
          border-[#c33201]
          pl-0
          lg:pl-8
        "
      >

        <h2
          className="
            text-3xl
            sm:text-4xl
            text-[#c33201]
            font-bold
            mb-8
            lg:mb-10
          "
        >
          Professional Experience
        </h2>


        {/* EXPERIENCE 01 */}

        <div className="relative pb-12 lg:pb-14">

          {/* Desktop Dot */}

          <div
            className="
              hidden
              lg:block
              absolute
              -left-[42px]
              top-2
              w-5
              h-5
              rounded-full
              bg-white
              border-4
              border-[#c33201]
              shadow-lg
            "
          ></div>


          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
            "
          >
            MERN Stack Developer
          </h3>


          <span
            className="
              inline-block
              font-Cabin
              mt-3
              lg:mt-4
              px-4
              py-1
              rounded-full
              bg-[#c33201]/10
              text-[#c33201]
              font-semibold
              text-sm
            "
          >
            2024 - Present
          </span>


          <p
            className="
              mt-3
              lg:mt-4
              italic
              text-gray-500
            "
          >
            Creative IT Institute
          </p>


          <ul
            className="
              mt-5
              space-y-3
              font-Cabin
              list-disc
              pl-5
              text-gray-600
              leading-7
              text-sm
              sm:text-base
            "
          >

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


        {/* EXPERIENCE 02 */}

        <div className="relative pb-12 lg:pb-14">

          {/* Desktop Dot */}

          <div
            className="
              hidden
              lg:block
              absolute
              -left-[42px]
              top-2
              w-5
              h-5
              rounded-full
              bg-white
              border-4
              border-[#c33201]
              shadow-lg
            "
          ></div>


          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
            "
          >
            Frontend Developer
          </h3>


          <span
            className="
              inline-block
              font-Cabin
              mt-3
              lg:mt-4
              px-4
              py-1
              rounded-full
              bg-[#c33201]/10
              text-[#c33201]
              font-semibold
              text-sm
            "
          >
            2023 - Present
          </span>


          <p
            className="
              mt-3
              lg:mt-4
              italic
              text-gray-500
            "
          >
            Creative IT Institute
          </p>


          <ul
            className="
              mt-5
              space-y-3
              font-Cabin
              list-disc
              pl-5
              text-gray-600
              leading-7
              text-sm
              sm:text-base
            "
          >

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


    {/* =====================================================
        RIGHT COLUMN
        ===================================================== */}

    <div>

      {/* =========================
          EDUCATION
          ========================= */}

      <h2
        className="
          text-3xl
          sm:text-4xl
          text-[#c33201]
          font-blinkma
          font-bold
          mt-0
          lg:mt-20
          mb-8
          lg:mb-10
        "
      >
        Education
      </h2>


      {/* EDUCATION TIMELINE */}

      <div
        className="
          relative
          font-blinkma
          border-l-0
          lg:border-l-2
          border-[#c33201]
          pl-0
          lg:pl-8
        "
      >

        {/* =================================================
            SSC
            ================================================= */}

        <div className="relative pb-12 lg:pb-14">

          {/* Desktop Dot */}

          <div
            className="
              hidden
              lg:block
              absolute
              -left-[42px]
              top-2
              w-5
              h-5
              rounded-full
              bg-white
              border-4
              border-[#c33201]
              shadow-lg
            "
          ></div>


          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
            "
          >
            Secondary School Certificate (SSC)
          </h3>


          <span
            className="
              inline-block
              font-Cabin
              mt-3
              lg:mt-4
              px-4
              py-1
              rounded-full
              bg-[#c33201]/10
              text-[#c33201]
              font-semibold
              text-sm
            "
          >
            2016
          </span>


          <p
            className="
              mt-3
              lg:mt-4
              italic
              text-gray-500
            "
          >
            Jatrabari Ideal School & College, Dhaka
          </p>


          <ul
            className="
              mt-5
              font-Cabin
              space-y-3
              list-disc
              pl-5
              text-gray-600
              leading-7
              text-sm
              sm:text-base
            "
          >

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


        {/* =================================================
            HSC
            ================================================= */}

        <div className="relative pb-12 lg:pb-14">

          {/* Desktop Dot */}

          <div
            className="
              hidden
              lg:block
              absolute
              -left-[42px]
              top-2
              w-5
              h-5
              rounded-full
              bg-white
              border-4
              border-[#c33201]
              shadow-lg
            "
          ></div>


          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
            "
          >
            Higher Secondary Certificate (HSC)
          </h3>


          <span
            className="
              inline-block
              font-Cabin
              mt-3
              lg:mt-4
              px-4
              py-1
              rounded-full
              bg-[#c33201]/10
              text-[#c33201]
              font-semibold
              text-sm
            "
          >
            2017 - 2018
          </span>


          <p
            className="
              mt-3
              lg:mt-4
              italic
              text-gray-500
            "
          >
            Ideal College, Dhanmondi
          </p>


          <ul
            className="
              mt-5
              font-Cabin
              space-y-3
              list-disc
              pl-5
              text-gray-600
              leading-7
              text-sm
              sm:text-base
            "
          >

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


        {/* =================================================
            BBS
            ================================================= */}

        <div className="relative">

          {/* Desktop Dot */}

          <div
            className="
              hidden
              lg:block
              absolute
              -left-[42px]
              top-2
              w-5
              h-5
              rounded-full
              bg-white
              border-4
              border-[#c33201]
              shadow-lg
            "
          ></div>


          <h3
            className="
              text-xl
              sm:text-2xl
              font-bold
            "
          >
            Bachelor of Business Studies (BBS)
          </h3>


          <span
            className="
              inline-block
              font-Cabin
              mt-3
              lg:mt-4
              px-4
              py-1
              rounded-full
              bg-[#c33201]/10
              text-[#c33201]
              font-semibold
              text-sm
            "
          >
            2019 - 2020
          </span>


          <p
            className="
              mt-3
              lg:mt-4
              italic
              text-gray-500
            "
          >
            Tejgaon College, Dhaka
          </p>


          <ul
            className="
              mt-5
              font-Cabin
              space-y-3
              list-disc
              pl-5
              text-gray-600
              leading-7
              text-sm
              sm:text-base
            "
          >

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