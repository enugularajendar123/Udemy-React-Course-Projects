/* eslint-disable no-unused-vars */
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/newExpense";
import "./App.css";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    key:"p1",
    title: "travelling charges",
    amount: 291,
    expDate: new Date(2021,12,21).toISOString(),
  },
  {
    key:"p2",
    title: "Insurance",
    amount: 300,
    expDate: new Date(2021,8,13).toISOString(),
  },
  {
    title: "EMI",
    amount: 100,
    expDate: new Date(2021,9,5).toISOString(),
  },
  {
    title: "Canteen",
    amount: 156,
    expDate: new Date(2020,10,10).toISOString(),
  },
];
function App() {
  const [expenses, updateExpenses] = useState(DUMMY_EXPENSES)
  
  const gettingDataHandler=(data)=>{
    updateExpenses(prevExpenses=>{
      return [data,...prevExpenses]
    })
  };
  // console.log(expenses);

  return (
    <div className="App">
      <NewExpense onGetData={gettingDataHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
