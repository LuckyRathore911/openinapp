import React from "react";

import FlashCard from "../components/FlashCard";
import Navbar from "../components/Navbar";
import Chart from "../components/ChartComponent";
import FooterCard1 from "../components/FooterCard1";
import FooterCard2 from "../components/FooterCard2";

import "../styles/dashboard.css";
import revenue_icon from "../assets/revenues_icon.svg";
import transaction_icon from "../assets/total_transactions_icon.svg";
import thumbs_up from "../assets/thumbs_up.svg";
import users_icon from "../assets/total_users.svg";

const Dashboard = (props) => {
  return (
    <div>
      {/* User should be signed in to access this page, 
      i.e., the number of keys of the user object should be more than 0. */}

      {Object.keys(props.user).length !== 0 && (
        <div className="dashboard-main">
          <div>
            <Navbar picture={props.picture} />
          </div>

          <div className="flashcards-div">
            <FlashCard
              image={revenue_icon}
              text={"Total Revenues"}
              value={"$2,129,430"}
              color="#DDEFE0"
            />
            <FlashCard
              image={transaction_icon}
              text={"Total Transactions"}
              value={"1,520"}
              color="#F4ECDD"
            />
            <FlashCard
              image={thumbs_up}
              text={"Total Likes"}
              value={"9,721"}
              color="#EFDADA"
            />
            <FlashCard
              image={users_icon}
              text={"Total Users"}
              value={"892"}
              color="#DEE0EF"
            />
          </div>

          <div>
            <Chart />
          </div>

          <div className="footer-cards-div">
            <FooterCard1 />
            <FooterCard2 />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
