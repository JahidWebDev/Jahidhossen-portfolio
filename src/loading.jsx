import React, { useState, useEffect } from "react";
import { gsap, Expo } from "gsap";
import "./index.css";

function loading({ onComplete }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [counter, setCounter] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loadingComplete, setLoadingComplete] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;

        clearInterval(interval);
        // eslint-disable-next-line react-hooks/immutability
        reveal();
        return 100;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.body.style.overflow = loadingComplete ? "auto" : "hidden";
  }, [loadingComplete]);
const reveal = () => {
  const tl = gsap.timeline();

tl.to(".follow", {
  width: "100%",
  duration: 1.2,
  ease: "expo.inOut",
})
  .to(".hide", {
    opacity: 0,
    duration: 0.3,
  })
  
  .to(".follow", {
    height: "100%",
    bottom: 0,
    duration: 0.8,
    ease: "expo.inOut",
  })
    // 👇 ONLY ONE loader animation
  .to(".loading", {
      opacity: 0,
      duration: 0.6,
      ease: Expo.easeInOut,
      onComplete: () => {
        setLoadingComplete(true);
        if (onComplete) onComplete(); // Notify parent
      },
  })
 tl.fromTo(
  ".letter",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power3.out",
    stagger: 0.05, // প্রতিটি letter এর delay
  },
  "-=0.8"
)
    .fromTo(
      ".main-content",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=0.2"
    );
};

  return (
    <div className="">
  {!loadingComplete && (
    <div className="loading">
      <div className="follow">
      
      </div>
       <p className="welcome-text">Assalamu Alaykum</p>
  <h1 className="loading-text">Welcome to My Portfolio</h1>
      <div className="progress-bar hide" style={{ width: counter + "%" }} />
      <p className="count hide font-bold">{counter}%</p>
    </div>
  )}
</div>
  );
}

export default loading;