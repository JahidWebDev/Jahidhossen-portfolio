import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import Hero from "./Components/Hero";
import Specialization from "./Components/Specialization";
import { useRef, } from "react";




gsap.registerPlugin(CSSPlugin);

function App() {


  // ===============================
  const [counter, setCounter] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
const contentRef = useRef(null);
  // ===== Loading Counter =====
  useEffect(() => {
  const interval = setInterval(() => {
    setCounter((prev) => {
      if (prev < 100) {
        return prev + 1;
      } else {
        clearInterval(interval);
        reveal(); // loading শেষ হলে animation
        return 100;
      }
    });
  }, 25);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  document.body.style.overflow = loadingComplete ? "auto" : "hidden";
}, [loadingComplete]);

  // ===== GSAP Reveal Animation =====
const reveal = () => {
  const tl = gsap.timeline();

  tl.to(".follow", {
    width: "100%",
    duration: 1.2,
    ease: Expo.easeInOut,
  })

    .to(".hide", {
      opacity: 0,
      duration: 0.3,
    })

    .to(".follow", {
      height: "100%",
      duration: 0.8,
      ease: Expo.easeInOut,
    })

    // loader fade (still mounted)
    .to(".loading", {
      opacity: 0,
      duration: 0.6,
      ease: Expo.easeInOut,
    })

    // content reveal BEFORE loader unmount
    .fromTo(
  ".content",
  { x: "-100%", visibility: "hidden" },
  {
    x: "0%",
    visibility: "visible",
    duration: 1.1,
    ease: Expo.easeOut,
  },
  "-=0.4"
)



    // finally unmount loader
.add(() => {
  const content = document.querySelector(".content");

  // content back to normal document flow
  content.style.position = "relative";
  content.style.visibility = "visible";

  setLoadingComplete(true);
});

};

  return (
    <AppContainer>
      {/* ===== LOADING ANIMATION ===== */}
  {!loadingComplete && (
  <Loading className="loading">
    <Follow className="follow" />
    <ProgressBar className="hide" style={{ width: counter + "%" }} />
    <Count className="hide">{counter}%</Count>
  </Loading>
)}


      {/* ===== HERO CONTENT ===== */}
      <Content className="content hero-wrapper">
        <Hero />
      </Content>

      {/* ===== SPECIALIZATION SECTION ===== */}
      {loadingComplete && (
        
          <SpecializationWrapper>
          <Specialization />
        </SpecializationWrapper>
        
      )}
    </AppContainer>
  );
}

export default App;

// ================= STYLED COMPONENTS =================

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #0ae448;
  position: relative;
  overflow-x: hidden;
`;


const Loading = styled.div`
    height: 100%;
  width: 100%;
  background-color: #0e100f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Follow = styled.div`
  position: absolute;
  background-color: #0ae448;
  height: 2px;
  width: 0;
  left: 0;
  z-index: 1000;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

const Count = styled.p`
  position: absolute;
  bottom: 70px;
  font-size: 40px;
  color: #fff;
  font-weight: 500;
`;

const Content = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: #0ae448;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  transform: translateX(-100%);
  visibility: hidden;
`;





const SpecializationWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #191919;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
`;
