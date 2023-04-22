import { useState } from "react";
import "./ExpenseForm.css";
// import Expenses from "../expenses/Expenses";
const ExpenseForm = (props) => {
  const [enteredTitle, changeEnteredTitle] = useState("");
  const [enteredAmount, changeEnteredAmount] = useState("");
  const [enteredDate, changeEnteredDate] = useState("");
  // const [userInput,changeInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:'',
  // });
  const titleChangeHandler = (event) => {
    changeEnteredTitle(event.target.value);

    // changeInput({
    //     ...userInput,
    //     enteredTitle: (event.target.value),
    // });
  };
  const amountChangeHandler = (event) => {
    changeEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    changeEnteredDate(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    // console.log(ExpenseData);
    props.onNewExpense(ExpenseData);
    changeEnteredAmount('');
    changeEnteredTitle('');
    changeEnteredDate('');
};

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={1}
            max={2000}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date of Expense</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
