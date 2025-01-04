import React from "react";
import "./OutputList.css";
const OutputList = (props) => {
  const userInput = props.userInfo;
  return (
    <div className="OutputList">
      <ul>
        {userInput.map((value, i) => {
          console.log(value, "VALUE");
          return <li key={value.id}>{value.userInput}</li>;
        })}
      </ul>
    </div>
  );
};

export default OutputList;
