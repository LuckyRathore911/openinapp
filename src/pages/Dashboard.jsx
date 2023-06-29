import React from "react";

import LeftSidebar from "../components/LeftSidebar";
import FlashCard from "../components/FlashCard";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import FooterCard from "../components/FooterCard";

import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="left-side">
        <LeftSidebar />
      </div>

      <div>
        <div>
          <Navbar />
        </div>

        <div className="flashcards-div">
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
        </div>

        <div>
          <Chart />
        </div>

        <div className="footer-cards-div">
          <FooterCard/>
          <FooterCard/>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
