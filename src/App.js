import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import PlusIcon from "./Components/UI/Plus/PlusButton";
import Output from "./Components/Output/Output/Output";
function App() {
  const [IsModalOn, setIsModalOn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const modalHandler = () => {
    setIsModalOn(true);
  };
  const userInputHandler = (userInput) => {
    console.log("DATA: ", userInput);
    setUserInfo((prevData) => {
      return [...prevData, userInput];
    });
    // map this userInfo to output
    console.log(userInfo);
  };
  return (
    <div className="App">
      <Output userInfo={userInfo} isActive={isActive} />
      {IsModalOn && (
        <Modal
          setIsModalOn={setIsModalOn}
          userInputHandler={userInputHandler}
          setIsActive={setIsActive}
        />
      )}
      <PlusIcon onclick={modalHandler} />
    </div>
  );
}

export default App;
