import React from "react";

import FlashCard from "../components/FlashCard";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import FooterCard from "../components/FooterCard";

import "../styles/dashboard.css";

const Dashboard = (props) => {
  return (
    <div>
      {/* User should be signed in to access this page, 
      i.e., the number of keys of the user object should be more than 0. */}

      {Object.keys(props.user).length !== 0 && (
        <div className="dashboard-main">
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
            <FooterCard />
            <FooterCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
