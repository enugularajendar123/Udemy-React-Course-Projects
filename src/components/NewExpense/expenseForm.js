import { useState } from "react";
import "./ExpenseForm.css";
// import Expenses from "../expenses/Expenses";
const ExpenseForm = (props) => {
  const [enteredTitle, changeEnteredTitle] = useState("");
  const [enteredAmount, changeEnteredAmount] = useState("");
  const [enteredDate, changeEnteredDate] = useState(new Date());
  const titleChangeHandler = (event) => {
    changeEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    changeEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // console.log(new Date(event.target.value).toISOString())
    changeEnteredDate(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,   //these names should be same as in the app.js file 
      expDate: enteredDate,
      amount: +enteredAmount,
    };
    console.log(ExpenseData);
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
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={1}
            max={2000}
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date of Expense</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} required />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
