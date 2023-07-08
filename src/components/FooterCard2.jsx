import React from "react";

import "../styles/footerCard.css";
import arrow from "../assets/side_arrow.svg";

const FooterCard2 = () => {
  return (
    <div>
      <div className="footer-main-div">
        <div className="footer-first-div">
          <h1 className="heading-1">Today's Schedule</h1>
          <p className="para-side">
            See all <img src={arrow}></img>
          </p>
        </div>
        <table>
          <tr>
            <div className="row">
              <td
                style={{ borderLeft: "5px solid #9BDD7C", height: "1rem" }}
              ></td>
              <td>
                <p className="para1">Meeting with suppliers from Kuta Bali</p>
                <p className="para2">14.00-15.00</p>
                <p className="para2">at Sunset Road, Kuta, Bali</p>
              </td>
            </div>
          </tr>
          <tr>
            <div>
              <td
                style={{ borderLeft: "5px solid #6972C3", height: "0.8rem" }}
              ></td>
              <td>
                <p className="para1">Check operation at Giga Factory 1</p>
                <p className="para2">18.00-20.00</p>
                <p className="para2">at Central Jakarta</p>
              </td>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FooterCard2;
