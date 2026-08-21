import { FaEye, FaDownload, FaAward } from "react-icons/fa";
import mern from "../img/mern-certificate.png";
import rwd from "../img/rwd-certificate.png";

const certificates = [
  {
    id: 1,
    title: "MERN Stack Development",
    institute: "Creative IT Institute",
    date: "17 November, 2025",
    image: mern,
  },
  {
    id: 2,
    title: "Responsive Web Design",
    institute: "Creative IT Institute",
    date: "16 October, 2023",
    image: rwd,
  },
];

function Certificate() {
  return (
    <section className="min-h-screen bg-white py-24 px-6 lg:px-16">
      <div className="max-w-7xl lg:mr-36 mx-auto">
        {/* Heading */}

        <div className="mb-12 ">
        

          <h2
            className="  font-BebasNeue text-6xl    font-bold text-[#c33201] "
            style={{ fontFamily: "BebasNeue" }}
          >
            Certificates
          </h2>

          <p
            className="mt-6 font-Cabin lg:w-[700px] text-gray-600 leading-8 text-lg max-w-6xl"
            style={{ fontFamily: "Cabin" }}
          >
            Professional certifications that demonstrate my knowledge,
            commitment and continuous learning journey in web development.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
  {certificates.map((item) => (
    <div
      key={item.id}
      className="
        group
        overflow-hidden
        rounded-2xl sm:rounded-3xl
        bg-[#E3DFD6]/40
        border border-gray-200
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >
      {/* Image */}
      <div className="relative p-4 sm:p-5 lg:p-6">
        <img
          src={item.image}
          alt={item.title}
          className="
            w-full
            h-[220px]
            sm:h-[280px]
            lg:h-[350px]
            object-contain
            transition
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            top-4 right-4
            sm:top-5 sm:right-5
            lg:top-5 lg:right-5
            w-10 h-10
            sm:w-12 sm:h-12
            lg:w-12 lg:h-12
            rounded-full
            bg-[#c33201]
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          <FaAward className="text-white text-base sm:text-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-6 sm:px-6 sm:pb-7 lg:px-8 lg:pb-8">
        <h3
          className="
            text-2xl
            sm:text-3xl
            lg:text-3xl
            text-black
          "
          style={{ fontFamily: "BebasNeue" }}
        >
          {item.title}
        </h3>

        <p
          className="text-[#c33201] mt-2 text-sm sm:text-base"
          style={{ fontFamily: "Cabin" }}
        >
          {item.institute}
        </p>

        <p
          className="text-gray-500 mt-1 text-sm sm:text-base"
          style={{ fontFamily: "Cabin" }}
        >
          {item.date}
        </p>

        <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-7 lg:mt-8">
          <a
            href={item.image}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              h-11
              sm:h-12
              rounded-lg
              sm:rounded-xl
              bg-[#2C2F3F]
              shadow-indigo-200
              text-white
              flex
              items-center
              justify-center
              gap-2
              transition
              hover:bg-[#da3f0c]
              text-sm
              sm:text-base
            "
            style={{ fontFamily: "Cabin" }}
          >
            <FaEye />
            <span>View Certificate</span>
          </a>

          <a
            href={item.image}
            download
            className="
              h-11 w-11
              sm:h-12 sm:w-12
              rounded-lg
              sm:rounded-xl
              border border-gray-300
              text-gray-700
              flex
              items-center
              justify-center
              hover:bg-[#c33201]
              hover:text-white
              hover:border-[#c33201]
              transition
              shrink-0
            "
          >
            <FaDownload />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      
      </div>
    </section>
  );
}

export default Certificate;