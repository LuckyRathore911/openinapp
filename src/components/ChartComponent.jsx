import React, { useEffect, useState } from "react";

import "../styles/chartComponent.css";

import arrow from "../assets/downward_arrow.svg";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const ChartComponent = () => {
  const [data, setData] = useState({
    data: {
      labels: [],
      datasets: [{}, {}],
    },
  });

  useEffect(() => {
    setData({
      data: {
        labels: ["0", "Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Guest",
            data: [250, 400, 230, 390, 330],
            borderColor: "#E9A0A0",
            tension: 0.4,
          },
          {
            label: "User",
            data: [360, 370, 250, 330, 310],
            borderColor: "#9BDD7C",
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          y: { min: 200, max: 500, step: 100 },
          x: { grid: { display: false } },
        },
        title: {
          text: "Activities",
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true, // Use circles instead of rectangles
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart-main-div">
      <h1 className="heading-1">Activities</h1>
      <p className="para-side">
        May-June 2021 <img src={arrow} alt="Arrow" />
      </p>
      <Line
        data={data.data}
        options={data.options}
        style={{ width: "90%", height: "70%" }}
      ></Line>
    </div>
  );
};

export default ChartComponent;
