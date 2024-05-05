import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Heading from "./components/heading/Heading";
import Homepage from "./pages/homepage/HomePage";

function App() {
  return (
    <Router>
      <Heading />
      <div className="container">
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
