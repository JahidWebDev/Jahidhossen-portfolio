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
    <section className="min-h-screen bg-[#F8F8F8] py-24 px-6 lg:px-16">
      <div className="max-w-7xl lg:mr-36 mx-auto">
        {/* Heading */}

        <div className="mb-12 ">
        

          <h2
            className="  font-BebasNeue text-6xl   font-bold text-[#c33201] "
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

        <div className="grid lg:grid-cols-2 gap-10">
          {certificates.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}

              <div className="relative bg-[#fafafa] p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[350px] object-contain transition duration-700 group-hover:scale-105"
                />

                <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#c33201] flex items-center justify-center shadow-lg">
                  <FaAward className="text-white text-lg" />
                </div>
              </div>

              {/* Content */}

              <div className="px-8 pb-8">
                <h3
                  className="text-3xl text-black"
                  style={{ fontFamily: "BebasNeue" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-[#c33201] mt-2"
                  style={{ fontFamily: "Cabin" }}
                >
                  {item.institute}
                </p>

                <p
                  className="text-gray-500 mt-1"
                  style={{ fontFamily: "Cabin" }}
                >
                  {item.date}
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 rounded-xl bg-black text-white flex items-center justify-center gap-2 transition hover:bg-[#da3f0c]"
                    style={{ fontFamily: "Cabin" }}
                  >
                    <FaEye />
                    View Certificate
                  </a>

                  <a
                    href={item.image}
                    download
                    className="h-12 w-12 rounded-xl border border-gray-300 text-gray-700 flex items-center justify-center hover:bg-[#c33201] hover:text-white hover:border-[#c33201] transition"
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