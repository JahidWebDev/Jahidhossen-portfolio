import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./loading";
import Pages from "./Home/Pages";
import NavbarWrapper from "./Components/NavbarWrapper";

// import navbar wrapper


function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      {/* Loader */}
      {!loadingComplete && (
        <Loading onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main App */}
      {loadingComplete && (
        <>
          {/* Navbar + Modal */}
          <NavbarWrapper />

          {/* Page Content */}
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<Pages />} />
              <Route path="/about" element={<h1 className="text-white p-10">About Page</h1>} />
              <Route path="/contact" element={<h1 className="text-white p-10">Contact Page</h1>} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;