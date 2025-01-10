import React from "react";
import "./OutputList.css";
const OutputList = (props) => {
  const userInput = props.userInfo;
  const filterHandler = (data) => {
    props.setCheckedIsActive(true);
    props.setUserInfo((prevState) => {
      return prevState.filter((userData) => {
        if (userData.id !== data.id) {
          return true;
        }
        return false;
      });
    });
    props.setCheckedList((prevData) => {
      console.log("PREVDATA", [...prevData, data]);
      return [...prevData, data];
    });
  };
  return (
    <div className="OutputList">
      <ul>
        {userInput.map((value, i) => {
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
