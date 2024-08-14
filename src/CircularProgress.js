import React from "react";
import "./CircularProgress.css";

const CircularProgress = ({ value, maxValue, label }) => {
  const radius = 40; // Radius of the circle
  const strokeWidth = 10; // Width of the stroke
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (value / maxValue) * circumference;

  return (
    <div className="circular-progress">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#00aaff"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="circular-progress-text">
        <p>{label}</p>
        <p>{value} hrs</p>
      </div>
    </div>
  );
};

export default CircularProgress;
