import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./loading";
import NavbarWrapper from "./Components/NavbarWrapper";


import Pages from "./Home/Pages";

// import ContactPage from "./Pages/ContactPage";
// import AboutPage from "./Home/AboutPage";
import ResumePage from "./Components/ResumePage";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      <ScrollToTop/>

      {!loadingComplete && (
        <Loading onComplete={() => setLoadingComplete(true)} />
      )}

      {loadingComplete && (
        <div className="flex">
          <NavbarWrapper />
<main className="flex-1 lg:ml-72 overflow-x-hidden">
  <Routes>
    <Route path="/" element={<Pages />} />
    <Route path="/about" element={<About />} />
    <Route path="/resume" element={<ResumePage />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/certificate" element={<Certificate />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</main>
        </div>
      )}
    </Router>
  );
}

export default App;