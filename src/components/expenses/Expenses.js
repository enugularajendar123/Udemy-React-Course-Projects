import "./Expenses.css";
import Cards from "../UI/Cards";
import ExcerciseComp from "./ExcerciseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [enteredYear, changeEnteredYear] = useState("2019");
  const changeYear = (Year) => {
    changeEnteredYear(Year);
    console.log(Year);
  };
  return (
    <Cards className="expenses">
      <div>
        <ExpensesFilter selected={enteredYear} onGetYear={changeYear} />
      </div>
      <ExcerciseComp
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].expDate}
      />
      <ExcerciseComp
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].expDate}
      />
      <ExcerciseComp
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].expDate}
      />
      <ExcerciseComp
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].expDate}
      />
    </Cards>
  );
}
export default Expenses;
