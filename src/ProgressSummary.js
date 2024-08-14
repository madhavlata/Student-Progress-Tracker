import React from "react";
import CircularProgress from "./CircularProgress";
import "./ProgressSummary.css";

const ProgressSummary = () => {
  return (
    <div className="progress-summary">
      <h2>Progress Summary</h2>
      <p class="lesson">Lesson: ABC X13</p>

      <div className="metrics">
        <CircularProgress value={10} maxValue={20} label="Speaking" />
        <CircularProgress value={8} maxValue={20} label="Listening" />
        <CircularProgress value={12} maxValue={20} label="Reading" />
        <CircularProgress value={5} maxValue={20} label="Writing" />
      </div>

      {/* <div className="pie-chart">
        <div
          className="pie-segment"
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "#ff6384",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        ></div>
        <div
          className="pie-segment"
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "#36a2eb",
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
          }}
        ></div>
        <div
          className="pie-segment"
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "#4bc0c0",
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
          }}
        ></div>
        <div
          className="pie-segment"
          style={{
            height: "150px",
            width: "150px",
            backgroundColor: "#ffce56",
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          }}
        ></div> */}
      {/* </div> */}
    </div>
  );
};

export default ProgressSummary;
