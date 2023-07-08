import React from "react";

import "../styles/flashCard.css";

const FlashCard = (props) => {
  // {var color=props.color}
  return (
    <>
      <div className="flash-card" style={{ backgroundColor: props.color }}>
        <img src={props.image} className="flash-card-image"></img>
        <p className="flash-card-text">{props.text}</p>
        <div className="flash-card-value">{props.value}</div>
      </div>
    </>
  );
};

export default FlashCard;
