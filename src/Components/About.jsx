import { Link } from "react-router-dom";

function About() {
  return (
    <section className="min-h-screen bg-white px-6 sm:px-10 lg:px-16 py-12 lg:py-20">
      <div className="w-full">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          About
        </h2>

        <p className="text-base sm:text-lg text-gray-600 leading-8 mb-8">
          This is the About section. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quaerat, rem.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Contact Me
        </Link>

      </div>
    </section>
  );
}

export default About;