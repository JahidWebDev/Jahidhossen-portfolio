import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FaWhatsapp } from "react-icons/fa";

import bannerimg from "../img/Jul 21, 2026, 06_40_10 PM.png";

gsap.registerPlugin(TextPlugin);

function Hero() {
  useGSAP(() => {
    // Intro Animation
    gsap.from(".hero-title", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    const words = [
      "I'm a MERN Stack Developer",
      "I'm a Frontend Developer",
      "I'm a Freelancer",
    ];

    const tl = gsap.timeline({
      repeat: -1,
    });

    words.forEach((word) => {
      tl.to(".target", {
        text: { value: word },
        duration: word.length * 0.08,
        ease: "none",
      })
        .to({}, { duration: 1.2 })
        .to({}, { duration: 0.2 });
    });
  });

  return (
    <>
      <section
        id="home"
        className="fixed top-0 left-0 lg:left-72 right-0 h-screen overflow-hidden -z-10"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top] md:bg-center lg:bg-right"
          style={{
            backgroundImage: `url(${bannerimg})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="w-full max-w-6xl mx-auto px-16 ml-10">
            <div className="flex flex-col items-start text-left space-y-4 max-w-2xl">
              {/* Name */}
              <h1
                className="
                  text-white
                  text-6xl
                  md:text-8xl
                  lg:text-[136px]
                  leading-[0.95]
                  lowercase
                  font-bold
                "
                style={{ fontFamily: "BebasNeue" }}
              >
                <span className="text-red-500">Hi,</span> I'm Jahid
              </h1>

              {/* Typing Text */}
              <div
                className="
                  flex
                  items-center
                  text-2xl
                  md:text-4xl
                  lg:text-4xl
                  font-semibold
                  text-white
                "
                style={{ fontFamily: "blinkma" }}
              >
                <span className="target"></span>

                <span className="ml-2 text-white animate-pulse">|</span>
              </div>

              {/* Line */}
              <div className="h-1 w-20 rounded-full bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
 {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/8801777169849"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-[9999] group"
>
  {/* Glow Effect */}
  <div className="absolute inset-0 rounded-full   transition duration-300"></div>

  {/* Button */}
  <div
    className="
    relative
  flex
  items-center
  gap-3
  bg-[#c33201]
  text-[#39FF14]
  px-3
  py-3
  rounded-full
  shadow-lg
  hover:bg-[#6E0000]
  hover:scale-110
  transition-all
  duration-300
    "
  >
    <FaWhatsapp className="text-3xl" />

    <div className="hidden lg:flex flex-col leading-none">
      <span className="text-xs opacity-80">Need Help?</span>
      <span className="font-semibold">Chat on WhatsApp</span>
    </div>
  </div>

 
</a>
    </>
  );
}

export default Hero;