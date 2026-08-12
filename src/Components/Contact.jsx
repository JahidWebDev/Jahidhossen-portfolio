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
    <section className="min-h-screen lg:bg-[#111111] bg-white flex items-center py-20 px-6 lg:px-16 lg:rounded-t-[20px]">
      <div className="max-w-7xl lg:mr-36 mx-auto w-full">

        {/* Heading */}

   <div className="mb-10 lg:mb-14">

  <h2
    className="
      mt-3
      text-5xl
      font-bold
      leading-[0.95]
      text-[#c33201]
      lg:text-[#c33201]
      lg:text-7xl
      
    "
    style={{ fontFamily: "BebasNeue" }}
  >
    Let's Work Together
  </h2>

  <p
    className="
    font-Cabin mt-6 w-[690px] text-gray-400 leading-8 text-lg max-w-6xl
    "
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

          <div
  className="
    w-full
    lg:col-span-4
    bg-[#f8f8f8]
    rounded-[16px]
    shadow-xl
    overflow-hidden
  "
>
  {/* Contact Content */}
  <div className="p-6 lg:p-8">

    <h3
      className="text-3xl text-black mb-8"
      style={{ fontFamily: "BebasNeue" }}
    >
      Contact Information
    </h3>

    <div className="space-y-5 lg:space-y-6">

      {contactInfo.map((item, index) => (

        <div
          key={index}
          className="
            flex
            items-center
            gap-4
            lg:gap-5
            p-4
            lg:p-5
            rounded-2xl
            border
            border-gray-100
            hover:border-[#c33201]
            hover:bg-[#fff7f4]
            transition-all
            duration-300
          "
        >

          {/* Icon */}
          <div
            className="
              w-12
              h-12
              lg:w-14
              lg:h-14
              shrink-0
              rounded-full
              bg-[#c33201]/10
              text-[#c33201]
              flex
              items-center
              justify-center
              text-lg
              lg:text-xl
            "
          >
            {item.icon}
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">

            <h4
              className="
                text-lg
                lg:text-xl
                text-black
                truncate
              "
              style={{ fontFamily: "BebasNeue" }}
            >
              {item.title}
            </h4>

            <p
              className="
                text-gray-500
                mt-1
                text-sm
                lg:text-base
                break-words
              "
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

  {/* Google Map */}
  <iframe
    title="Google Map"
    src="https://www.google.com/maps?q=Jatrabari,Dhaka,Bangladesh&output=embed"
    className="
      w-full
      h-[240px]
      lg:h-[260px]
      border-0
    "
    loading="lazy"
  />

</div>

          {/* Right Side */}
<div
  className="
    relative
    lg:col-span-8
    -mx-6
    lg:mx-0
    bg-[#111111]
    lg:bg-white
    rounded-b-[16px]
    shadow-xl
    p-10
  "
>

  {/* Card Top Edge */}
  <div
    className="
      absolute
      top-0
      left-0
      w-full
      h-4
      rounded-b-[16px]
      z-[6]
      bg-white
    "
  />

  <h3
    className="text-4xl lg:text-black text-white mb-8"
    style={{ fontFamily: "BebasNeue" }}
  >
    Send a Message
  </h3>

  <form className="space-y-6">

    {/* Name + Email */}
    <div className="grid md:grid-cols-2 gap-6">

      <div>

        <label
          className="block mb-2 lg:text-black text-white"
          style={{ fontFamily: "Cabin" }}
        >
          Full Name
        </label>

        <input
          type="text"
          placeholder="Jahid Hossen"
          className="
            w-full
            h-14
            rounded-xl
            border
            border-gray-200
            bg-[#fafafa]
            px-5
            outline-none
            focus:border-[#c33201]
            focus:ring-4
            focus:ring-[#c33201]/10
            transition
          "
        />

      </div>

      <div>

        <label
          className="block mb-2 lg:text-black text-white"
          style={{ fontFamily: "Cabin" }}
        >
          Email Address
        </label>

        <input
          type="email"
          placeholder="contactjahiddev@gmail.com"
          className="
            w-full
            h-14
            rounded-xl
            border
            border-gray-200
            bg-[#fafafa]
            px-5
            outline-none
            focus:border-[#c33201]
            focus:ring-4
            focus:ring-[#c33201]/10
            transition
          "
        />

      </div>

    </div>

    {/* Subject */}
    <div>

      <label
        className="block mb-2 lg:text-black text-white"
        style={{ fontFamily: "Cabin" }}
      >
        Subject
      </label>

      <input
        type="text"
        placeholder="Project Discussion"
        className="
          w-full
          h-14
          rounded-xl
          border
          border-gray-200
          bg-[#fafafa]
          px-5
          outline-none
          focus:border-[#c33201]
          focus:ring-4
          focus:ring-[#c33201]/10
          transition
        "
      />

    </div>

    {/* Message */}
    <div>

      <label
        className="block mb-2 lg:text-black text-white"
        style={{ fontFamily: "Cabin" }}
      >
        Message
      </label>

      <textarea
        rows="7"
        placeholder="Write your message..."
        className="
          w-full
          rounded-xl
          border
          border-gray-200
          bg-[#fafafa]
          p-5
          resize-none
          outline-none
          focus:border-[#c33201]
          focus:ring-4
          focus:ring-[#c33201]/10
          transition
        "
      ></textarea>

    </div>

    {/* Button */}
    <button
      type="submit"
      className="
        group
        bg-white
        lg:bg-black
        lg:text-white
        hover:bg-[#d63b08]
        text-black
        rounded-xl
        px-10
        h-14
        flex
        items-center
        gap-3
        transition-all
        duration-300
        hover:scale-105
        shadow-lg
        shadow-[#c33201]/20
      "
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