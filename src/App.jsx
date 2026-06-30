import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./loading";

import NavbarWrapper from "./Components/NavbarWrapper";
import Pages from "./Home/Pages";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      {!loadingComplete && (
        <Loading onComplete={() => setLoadingComplete(true)} />
      )}

      {loadingComplete && (
        <div className="flex">
          <NavbarWrapper />

          <main className="ml-72 flex-1">
            <Routes>
              <Route path="/" element={<Pages />} />
            </Routes>
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;