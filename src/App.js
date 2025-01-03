import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import PlusIcon from "./Components/UI/Plus/PlusButton";
function App() {
  const [IsModalOn, setIsModalOn] = useState(false);
  const modalHandler = () => {
    setIsModalOn(true);
  };
  return (
    <div className="App">
      {IsModalOn && <Modal setIsModalOn={setIsModalOn} />}
      <PlusIcon onclick={modalHandler} />
    </div>
  );
}

export default App;
