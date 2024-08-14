import React from "react";
import { CircularProgress as MuiCircularProgress } from "./CircularProgress";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./ProgressSummary.css";

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

const progressData = {
  labels: ["Speaking", "Listening", "Reading", "Writing"],
  datasets: [
    {
      label: "Time Spent (hrs)",
      data: [10, 8, 12, 5],
      backgroundColor: ["#ff6384", "#36a2eb", "#4bc0c0", "#ffce56"],
    },
  ],
};

const progressOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw} hrs`;
        },
      },
    },
  },
};

const pieData = {
  labels: ["Speaking", "Listening", "Reading", "Writing"],
  datasets: [
    {
      label: "Time Distribution",
      data: [10, 8, 12, 5],
      backgroundColor: ["#ff6384", "#36a2eb", "#4bc0c0", "#ffce56"],
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw} hrs`;
        },
      },
    },
  },
};

const ProgressSummary = () => {
  return (
    <div className="progress-summary">
      <h2>Progress Summary</h2>
      <p className="lesson">Lesson: ABC X13</p>

      <div className="charts">
        <div className="bar-chart">
          <h3>Time Spent on Activities</h3>
          <Bar data={progressData} options={progressOptions} />
        </div>
        <div className="pie-chart">
          <h3>Time Distribution</h3>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;
