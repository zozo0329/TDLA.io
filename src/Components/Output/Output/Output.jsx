import "./Output.css";
import OutputList from "../OutputList/OutputList";
import OutputCheckedList from "../OutputList/OutputCheckedList";
const Output = (props) => {
  return (
    <div className="Output">
      <div className="HeroList">
        <div className="List">
          {props.isActive && (
            <OutputList
              userInfo={props.userInfo}
              setUserInfo={props.setUserInfo}
              setCheckedList={props.setCheckedList}
              setCheckedIsActive={props.setCheckedIsActive}
            />
          )}
          {!props.isActive && <h2>No list at this moment</h2>}
        </div>
        <div className="CHecked-List">
          {props.checkedIsActive && (
            <OutputCheckedList
              userInfo={props.userInfo}
              checkedList={props.checkedList}
            />
          )}
          {/* <OutputCheckedList
            userInfo={props.userInfo}
            checkedList={props.checkedList}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Output;
