import React, { useState } from "react";
import ExpenseForm from "./expenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [editing , setEditing] = useState(false )
    const newExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onGetData(expenseData);
        setEditing(false  )
    };
    const showExpenseHandler = () => {
      setEditing(true);
    };
    const closeForm = () => {
      setEditing(false)
    };
  return (
    <div className="new-expense">
      {!editing && <button onClick={showExpenseHandler}>Add New Expense</button>}
        {editing && <ExpenseForm onNewExpense={newExpenseHandler} onCancel={closeForm}/>}
    </div>
  );
}

export default NewExpense;
