import React from "react";

import search_icon from "../assets/Search icon.svg";
import bell from "../assets/bell.svg";

import "../styles/navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h2>Dashboard</h2>
      <div>
        <form>
          <input type="text" placeholder="Search..."></input>
          <img
            src={search_icon}
            alt="Search"
            width="18"
            className="search-icon"
          ></img>
        </form>
      </div>

      <div>
        <img src={bell} alt="bell" className="bell-icon"></img>
      </div>
      <div>
        <img src={props.picture} alt="user" className="user-image"></img>
      </div>
    </div>
  );
};

export default Navbar;
