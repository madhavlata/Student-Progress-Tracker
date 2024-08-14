import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="progress-summary">Progress Summary</Link>
      <Link to="detailed-reports">Detailed Reports</Link>
    </div>
  );
};

export default Sidebar;
