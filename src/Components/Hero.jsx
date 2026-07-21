import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

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
  // Type
  tl.to(".target", {
    text: { value: word },
    duration: word.length * 0.08,
    ease: "none",
  })

    // Hold
    .to({}, { duration: 1.2 })


    // Pause
    .to({}, { duration: 0.2 });
});
});

  return (
    <section
      id="home"
      className="fixed top-0 left-0 lg:left-72 right-0 h-screen overflow-hidden -z-10"
    >
      {/* Background */}
  <div
  className="absolute inset-0 bg-cover bg-no-repeat
             bg-[center_top]
             md:bg-center
             lg:bg-right"
  style={{
    backgroundImage: `url(${bannerimg})`,
  }}
/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
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
      leading-[0.95] tracking-1px]
       lowercase
      font-bold
    "
    style={{ fontFamily: "BebasNeue" }}
  >
  <span className="text-red-500"> Hi,</span> I'm Jahid
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

    <span className="ml-2 text-white animate-pulse">
      |
    </span>
  </div>

  {/* Line */}
  <div className="h-1 w-20 rounded-full bg-red-600"></div>



</div>

  </div>
</div>
    </section>
  );
}

export default Hero;