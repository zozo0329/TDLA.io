import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import PlusIcon from "./Components/UI/Plus/PlusButton";
import Output from "./Components/Output/Output/Output";
function App() {
  const [IsModalOn, setIsModalOn] = useState(false); //  modal
  const [isActive, setIsActive] = useState(false); //  list
  const [checkedIsActive, setCheckedIsActive] = useState(false); // checked list
  const [userInfo, setUserInfo] = useState([]);
  const [chekedList, setCheckedList] = useState([]);
  const modalHandler = () => {
    setIsModalOn(true);
  };
  const userInputHandler = (userInput) => {
    setUserInfo((prevData) => {
      return [...prevData, userInput];
    });
  };
  return (
    <div className="App">
      <Output
        isActive={isActive}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        // CHECKED LIST
        chekedList={chekedList}
        setCheckedList={setCheckedList}
        // switch for checked list
        checkedIsActive={checkedIsActive}
        setCheckedIsActive={setCheckedIsActive}
      />
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
