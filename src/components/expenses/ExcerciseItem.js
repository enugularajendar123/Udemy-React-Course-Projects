import { useState } from "react";
import "./ExcerciseItem.css";
import Dates from "./ExpenseDate";

function ExcerciseComp(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <div className="expense-item">
      <div>
        <Dates newdate={props.date}></Dates>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">Rs:{props.amount}</div>
      <button onClick={clickHandler}>click here</button>
    </div>
  );
}

export default ExcerciseComp;
