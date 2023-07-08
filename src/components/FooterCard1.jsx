import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Title } from "chart.js";

import arrow from "../assets/downward_arrow.svg";
import "../styles/footerCard.css";

ChartJS.register(ArcElement, Legend, Title);

function FooterCard1() {
  const data = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        label: "Users",
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true, // Use circles instead of rectangles
          font: {
            size: "17rem", // Make the labels bold
            color: "#000000",
            family: "Montserrat",
            weight: 700,
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="footer-main-div">
        <div className="footer-first-div">
          <h1 className="heading-1">Top Products</h1>
          <p className="para-side">
            May-June 2021 <img src={arrow} alt="Arrow" />
          </p>
        </div>

        <div className="chart-container">
          <Pie data={data} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default FooterCard1;
