import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./loading";
import NavBar from "./Components/NavBar";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      {/* Show Loader until loading is complete */}
      {!loadingComplete && <Loading onComplete={() => setLoadingComplete(true)} />}

      {loadingComplete && (
        <>
          <NavBar /> {/* Fixed navigation */}
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<h1 className="text-center mt-10 text-2xl">Home Page</h1>} />
              <Route path="/about" element={<h1 className="text-center mt-10 text-2xl">About Page</h1>} />
              <Route path="/contact" element={<h1 className="text-center mt-10 text-2xl">Contact Page</h1>} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;