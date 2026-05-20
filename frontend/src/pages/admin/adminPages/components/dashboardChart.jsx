
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardCharts = () => {
  // Revenue Overview data
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 20000, 15000, 25000, 22000, 30000],
        borderColor: "#3B82F6", // Blue line
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const revenueOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Revenue Overview",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Car Categories data
  const carData = {
    labels: ["Economy", "SUV", "Luxury", "Vans"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#3B82F6", "#A78BFA", "#22C55E", "#F59E0B"],
        borderWidth: 0,
      },
    ],
  };

  const carOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Car Categories",
        font: {
          size: 18,
        },
      },
    },
    cutout: "60%", // makes it a donut chart
  };

  return (
    <div className="flex flex-col md:flex-row gap-6  ">
      <div className="flex-1 w-full md:w-2/3 items-center bg-white rounded-lg shadow p-4 min-w-[600px] ">
        <Line data={revenueData} options={revenueOptions} />
      </div>
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-4 min-w-[300px] ">
        <Doughnut data={carData} options={carOptions} />
      </div>
    </div>
  );
};

export default DashboardCharts;
