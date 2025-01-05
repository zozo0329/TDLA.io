import React, { useState } from "react";
import "./UserInput.css";
import Button from "../UI/Button/Button";
const UserInput = (props) => {
  const [userInput, setUserInput] = useState("");

  const inputHandler = (e) => {
    setUserInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userInputData = {
      userInput,
      id: Math.random().toString(),
    };
    props.userInputHandler(userInputData);
    props.setIsActive(true);
    setUserInput("");
  };
  return (
    <>
      <div className="UserInput">
        <form onSubmit={submitHandler}>
          <input type="text" onChange={inputHandler} value={userInput} />
          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default UserInput;
