import { Link } from "react-router-dom";

function ResumePage() {
  return (
    <section id="resume" className="min-h-screen bg-gray-50 px-8 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-sky-500 uppercase tracking-widest font-semibold">
            My Resume
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Resume
          </h1>

          <div className="w-24 h-1 bg-sky-500 mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl">
            Passionate MERN Stack Developer with experience building modern,
            responsive and scalable web applications using React, Node.js,
            Express.js and MongoDB.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Education
            </h2>

            <div className="border-l-4 border-sky-500 pl-6 space-y-10">

              <div>
                <h3 className="text-2xl font-semibold">
                  Bachelor of Business Studies
                </h3>

                <span className="inline-block mt-2 bg-sky-100 text-sky-600 px-4 py-1 rounded">
                  2019 - 2020
                </span>

                <p className="mt-3 text-gray-600">
                  Tejgaon College, Dhaka
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  MERN Stack Development
                </h3>

                <span className="inline-block mt-2 bg-sky-100 text-sky-600 px-4 py-1 rounded">
                  2024 - 2025
                </span>

                <p className="mt-3 text-gray-600">
                  Creative IT Institute
                </p>
              </div>

            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Experience
            </h2>

            <div className="border-l-4 border-sky-500 pl-6 space-y-10">

              <div>
                <h3 className="text-2xl font-semibold">
                  MERN Stack Developer
                </h3>

                <span className="inline-block mt-2 bg-sky-100 text-sky-600 px-4 py-1 rounded">
                  2025 - Present
                </span>

                <ul className="mt-4 text-gray-600 list-disc ml-5 space-y-2">
                  <li>Develop responsive React applications.</li>
                  <li>Build REST APIs using Express.js.</li>
                  <li>Manage MongoDB databases.</li>
                  <li>Create modern UI using Tailwind CSS.</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Skills */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-10">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white shadow rounded-xl p-5 text-center font-semibold hover:shadow-lg transition"
              >
                {skill}
              </div>
            ))}

          </div>
        </div>

        {/* Download Button */}
        <div className="mt-16">

          <Link
            to="/contact"
            className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Contact Me
          </Link>

        </div>

      </div>
    </section>
  );
}

export default ResumePage;