import React from "react";
import "./UserInput.css";
import Button from "../UI/Button/Button";
const UserInput = () => {
  return (
    <>
      <div className="UserInput">
        <form>
          <input type="text" />
          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default UserInput;
