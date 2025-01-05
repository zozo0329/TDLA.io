import React from "react";
import "./OutputList.css";
const OutputList = (props) => {
  const userInput = props.userInfo;
  const filterHandler = (data) => {
    console.log(data, "TEST");
    // props.setUserInfo()
  };
  return (
    <div className="OutputList">
      <ul>
        {userInput.map((value, i) => {
          console.log(value, "VALUE");
          return (
            <li
              key={value.id}
              onClick={() => {
                filterHandler(value);
              }}
            >
              {value.userInput}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OutputList;
