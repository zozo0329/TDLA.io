import React from "react";
import "./Output.css";
import OutputList from "../OutputList/OutputList";
import OutputCheckedList from "../OutputList/OutputCheckedList";
const Output = (props) => {
  return (
    <div className="Output">
      <div className="HeroList">
        <div className="List">
          <OutputList userInfo={props.userInfo} />
        </div>
        <div className="CHecked-List">
          <OutputCheckedList />
        </div>
      </div>
    </div>
  );
};

export default Output;
