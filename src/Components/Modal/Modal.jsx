import React from "react";
import "./Modal.css";
import UserInput from "../UserInput/UserInput";
const Modal = (props) => {
  const closeHandler = () => {
    props.setIsModalOn(false);
  };
  return (
    <>
      <div className="modal">
        <div class="modal-content">
          <span className="close" onClick={closeHandler}>
            &times;
          </span>
          <UserInput />
        </div>
      </div>
    </>
  );
};

export default Modal;
