import React from "react";
import "./CardBtn.css";

const CardBtn = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    answer = {props.answer}
  >
  {props.name}
  </button>
);

export default CardBtn;
