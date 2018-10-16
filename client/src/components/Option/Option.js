import React from "react";
import "./Option.css"

const Option = props => (
    <button
      onClick={props.onClick}
      className={`option ${props["data-value"]}`}
      {...props}
    >
    {props.text}
    </button>
  );
  
  export default Option;