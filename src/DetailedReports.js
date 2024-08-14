import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import CircularProgress from "./CircularProgress";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./DetailedReports.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DetailedReports = () => {
  // Data for Bar Graph (Scores)
  const barData = {
    labels: ["Level 1", "Level 2", "Level 3"],
    datasets: [
      {
        label: "Scores",
        data: [85, 90, 78],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for Bar Graph
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Score: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  // Data for Pie Chart (Progress)
  const pieData = {
    labels: ["Speaking", "Listening", "Reading", "Writing"],
    datasets: [
      {
        label: "Time Spent",
        data: [10, 8, 12, 5],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  // Options for Pie Chart
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Progress Over Time",
        data: [30, 45, 60, 75],
        fill: false,
        borderColor: "#36a2eb",
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="detailed-reports">
      <h2>Detailed Reports</h2>
      <div className="report-item">
        <p>
          Hours Spent: <span>35 hrs</span>
        </p>
        <div className="progress-container">
          <CircularProgress variant="determinate" value={80} size={100} />
          <div className="progress-text">Progress: 80%</div>
        </div>
      </div>
      <div className="report-item">
        <p>
          Progress %: <span>80%</span>
        </p>
        <div className="chart-container">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
      <div className="report-item">
        <p>
          Overall Proficiency Level: <span>Intermediate</span>
        </p>
        <p>
          Scores of Each Level: <span>85, 90, 78</span>
        </p>
        <div className="chart-container">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
      <div className="report-item">
        <p>Progress Over Time:</p>
        <Line data={lineData} options={lineOptions} />
      </div>
      <div className="report-item">
        <p>
          Strengths: <span>Reading</span>
        </p>
        <p>
          Weaknesses: <span>Writing</span>
        </p>
        <p>
          Improvements: <span>Focus on Writing Skills</span>
        </p>
      </div>
    </div>
  );
};

export default DetailedReports;
