import React from "react";
import ExpenseForm from "./expenseForm";
import "./NewExpense.css";
function NewExpense(props) {
    const newExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // console.log(expenseData);
        props.onGetData(expenseData);
    };
  return (
    <div className="new-expense">
        <ExpenseForm onNewExpense={newExpenseHandler}/>
    </div>
  );
}

export default NewExpense;
