import React from "react";
import "./OutputCheckedList.css";
const OutputCheckedList = (props) => {
  console.log(props.checkedList);
  return (
    <div className="CheckedList">
      <ul>
        {props.checkedList.map((value) => {
          console.log(value, "VALUE");
          return <li key={value.id}>{value.userInput}</li>;
        })}
      </ul>
    </div>
  );
};

export default OutputCheckedList;
