import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loading from "./loading";
import NavbarWrapper from "./Components/NavbarWrapper";
import ScrollToTop from "./Components/ScrollToTop";

import Pages from "./Home/Pages";

// import ContactPage from "./Pages/ContactPage";
// import AboutPage from "./Home/AboutPage";
import ResumePage from "./Components/ResumePage";
import About from "./Components/About";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      <ScrollToTop />

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
  </Routes>
</main>
        </div>
      )}
    </Router>
  );
}

export default App;