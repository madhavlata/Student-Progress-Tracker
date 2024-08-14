import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import KidDashboard from "./KidDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kid/:kidName/*" element={<KidDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
