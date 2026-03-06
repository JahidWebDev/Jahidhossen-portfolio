import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, Expo } from "gsap";

import Hero from "./Components/Hero";
import Specialization from "./Components/Specialization";
import Resume from "./Components/Resume";

function App() {
  const [counter, setCounter] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  /* ================= LOADING COUNTER ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;

        clearInterval(interval);
        reveal();
        return 100;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  /* ================= DISABLE SCROLL DURING LOADING ================= */
  useEffect(() => {
    document.body.style.overflow = loadingComplete ? "auto" : "hidden";
  }, [loadingComplete]);

  /* ================= GSAP REVEAL ================= */
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
      .to(".loading", {
        opacity: 0,
        duration: 0.6,
        ease: Expo.easeInOut,
      })
      .fromTo(
        ".hero-content",
        {
          x: "-100%",
          visibility: "hidden",
        },
        {
          x: "0%",
          visibility: "visible",
          duration: 1.1,
          ease: Expo.easeOut,
        },
        "-=0.4"
      )
      .add(() => setLoadingComplete(true));
  };

  return (
    <AppContainer>
      {/* ================= LOADER ================= */}
      {!loadingComplete && (
        <Loading className="loading">
          <Follow className="follow" />
          <ProgressBar className="hide" style={{ width: counter + "%" }} />
          <Count className="hide">{counter}%</Count>
        </Loading>
      )}

      {/* ================= HERO ================= */}
      <HeroWrapper>
        <Hero />
      </HeroWrapper>

      {/* ================= PAGE CONTENT ================= */}
      {loadingComplete && (
        <>
          <Section id="specialization">
            <Specialization />
          </Section>

          <Section id="resume">
            <Resume />
          </Section>
        </>
      )}
    </AppContainer>
  );
}

export default App;

/* ================= STYLED COMPONENTS ================= */

const AppContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
  background-color: #0ae448;
`;

const Loading = styled.div`
  position: fixed;
  inset: 0;
  background-color: #0e100f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Follow = styled.div`
  position: absolute;
  background-color: #0ae448;
  height: 2px;
  width: 0;
  left: 0;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  background-color: #fff;
  height: 2px;
`;

const Count = styled.p`
  position: absolute;
  bottom: 70px;
  font-size: 40px;
  color: #fff;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 10;
`;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
`;