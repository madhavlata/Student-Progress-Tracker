import React from "react";
import Sidebar from "./Sidebar";
import ProgressSummary from "./ProgressSummary";
import DetailedReports from "./DetailedReports";
import { Route, Routes } from "react-router-dom";
import "./KidDashboard.css";

const KidDashboard = () => {
  return (
    <div className="kid-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="progress-summary" element={<ProgressSummary />} />
          <Route path="detailed-reports" element={<DetailedReports />} />
        </Routes>
      </div>
    </div>
  );
};

export default KidDashboard;
