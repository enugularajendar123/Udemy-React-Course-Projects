import "./ExcerciseItem.css";
import Dates from "./ExpenseDate";

function ExcerciseComp(props) {
  

  return (
    <div className="expense-item">
      <div>
        <Dates newdate={props.date}></Dates>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs:{props.amount}</div>
    </div>
  );
}

export default ExcerciseComp;
