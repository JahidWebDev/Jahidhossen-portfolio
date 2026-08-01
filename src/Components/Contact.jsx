import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Jatrabari, Dhaka, Bangladesh",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "contactjahiddev@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "+880 1777-169849",
    value: "Available",
  },
];

function Contact() {
  return (
    <section className="min-h-screen bg-white flex items-center py-20 px-6 lg:px-16">
      <div className="max-w-7xl lg:mr-36 mx-auto w-full">

        {/* Heading */}

        <div className="mb-14">

        

          <h2
            className="mt-3 text-6xl text-[#c33201] lg:text-7xl text-[#111]"
            style={{ fontFamily: "BebasNeue" }}
          >
            Let's Work Together
          </h2>

          <p
            className="mt-5 max-w-3xl text-gray-500 text-lg leading-8"
            style={{ fontFamily: "Cabin" }}
          >
            Feel free to contact me for freelance work, full-time
            opportunities or collaboration. I usually reply within
            24 hours.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left Side */}

          <div className="lg:col-span-4 bg-[#f8f8f8] rounded-[32px] shadow-xl overflow-hidden">

            <div className="p-8">

              <h3
                className="text-3xl text-black mb-8"
                style={{ fontFamily: "BebasNeue" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">

                {contactInfo.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 hover:border-[#c33201] hover:bg-[#fff7f4] transition-all duration-300"
                  >

                    <div className="w-14 h-14 rounded-full bg-[#c33201]/10 text-[#c33201] flex items-center justify-center text-xl">

                      {item.icon}

                    </div>

                    <div>

                      <h4
                        className="text-xl text-black"
                        style={{ fontFamily: "BebasNeue" }}
                      >
                        {item.title}
                      </h4>

                      <p
                        className="text-gray-500 mt-1"
                        style={{ fontFamily: "Cabin" }}
                      >
                        {item.value}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* Social */}


            </div>

            {/* Google Map এখান থেকে শুরু হবে */}

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Jatrabari,Dhaka,Bangladesh&output=embed"
              className="w-full h-[260px]"
              loading="lazy"
            />

          </div>

          {/* Right Form Part 2 এ থাকবে */}
                    {/* Right Side */}

          <div className="lg:col-span-8 bg-[#f8f8f8] rounded-[32px] shadow-xl p-10">

            <h3
              className="text-4xl text-black mb-8"
              style={{ fontFamily: "BebasNeue" }}
            >
              Send a Message
            </h3>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label
                    className="block mb-2 text-gray-700"
                    style={{ fontFamily: "Cabin" }}
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Jahid Hossen"
                    className="w-full h-14 rounded-xl border border-gray-200 bg-[#fafafa] px-5 outline-none focus:border-[#c33201] focus:ring-4 focus:ring-[#c33201]/10 transition"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 text-gray-700"
                    style={{ fontFamily: "Cabin" }}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="contactjahiddev@gmail.com"
                    className="w-full h-14 rounded-xl border border-gray-200 bg-[#fafafa] px-5 outline-none focus:border-[#c33201] focus:ring-4 focus:ring-[#c33201]/10 transition"
                  />
                </div>

              </div>

              <div>

                <label
                  className="block mb-2 text-gray-700"
                  style={{ fontFamily: "Cabin" }}
                >
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full h-14 rounded-xl border border-gray-200 bg-[#fafafa] px-5 outline-none focus:border-[#c33201] focus:ring-4 focus:ring-[#c33201]/10 transition"
                />

              </div>

              <div>

                <label
                  className="block mb-2 text-gray-700"
                  style={{ fontFamily: "Cabin" }}
                >
                  Message
                </label>

                <textarea
                  rows="7"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-200 bg-[#fafafa] p-5 resize-none outline-none focus:border-[#c33201] focus:ring-4 focus:ring-[#c33201]/10 transition"
                ></textarea>

              </div>

              <button
                type="submit"
                className="group bg-black hover:bg-[#d63b08] text-white rounded-xl px-10 h-14 flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#c33201]/20"
                style={{ fontFamily: "Cabin" }}
              >
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;