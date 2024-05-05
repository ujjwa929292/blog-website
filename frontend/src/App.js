import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Heading from "./components/heading/Heading";
import Homepage from "./pages/homepage/HomePage";
import Write from "./pages/write/Write";

function App() {
  return (
    <Router>
      <Heading />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
