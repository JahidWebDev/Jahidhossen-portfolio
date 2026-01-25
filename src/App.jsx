import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import Hero from "./Components/Hero";
import Specialization from "./Components/Specialization";

gsap.registerPlugin(CSSPlugin);

function App() {
  const [counter, setCounter] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // ===== Loading Counter =====
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), reveal(), 100)
      );
    }, 25);

    return () => clearInterval(count);
  }, []);

  // ===== GSAP Reveal Animation =====
  const reveal = () => {
    gsap
      .timeline()
      .to(".follow", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 1.2,
        delay: 0.7,
      })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
.to(".content", {
  x: 0,               // screen এ আসার জন্য
  ease: Expo.easeInOut,
  duration: 0.7,         // 3 সেকেন্ডে slide হবে
  onComplete: () => setLoadingComplete(true),
})
.to(".title-lines", { display: "block", duration: 0.1 })
.to(".title-lines", {
  opacity: 1,
  stagger: 0.15,
  ease: Expo.easeInOut,
  duration: 0.6,
});

  };

  return (
    <AppContainer>
      {/* ===== LOADING ANIMATION ===== */}
      {!loadingComplete && (
        <Loading>
          <Follow className="follow" />
          <ProgressBar
            className="hide"
            style={{ width: counter + "%" }}
          />
          <Count>{counter}%</Count>
        </Loading>
      )}

      {/* ===== HERO CONTENT ===== */}
      <Content className="content">
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
  color: #000;
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
  width: 100%;
  height: 100vh;
  background-color: #0ae448;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: auto;

  transform: translateX(-100%); /* left থেকে শুরু */
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
