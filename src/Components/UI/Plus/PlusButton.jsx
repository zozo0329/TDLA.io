import React from "react";
import Plus from "./icons8-plus-64.png";
import "./PlusButton.css";
const PlusButton = (props) => {
  return (
    <div className="Plus">
      <img onClick={props.onclick} src={Plus} alt="Icon" />
    </div>
  );
};

export default PlusButton;
