import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpenseLength from "./ExpenseLength";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredYear, changeEnteredYear] = useState("2019");
  const changeYear = (Year) => {
    changeEnteredYear(Year);
  };
  // let newaray = []
  // props.items.map((expense) => {
  //   return (
  //     newaray.push(expense)
  //   )
  // })

  const filteredExpenses = props.items.filter(
    (expense) => {
      return (
        expense.expDate=new Date(expense.expDate),
        expense.expDate.getFullYear() === Number(enteredYear)
      )
    }
  );
  // this the another method used to output the conditional elements. 
  // this is based on the if statement. we use the pointer to use this condition below in the code

  // let expenseLength = <p>There are no expenses to show</p>  //we can use the let variable = to not only create the variables but also we can use them to assign html inputs

  

  return (
    <Cards className="expenses">
      <div>
        <ExpensesFilter selected={enteredYear} onGetYear={changeYear} />
      </div>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseLength items={filteredExpenses}/>

      {/* {expenseLength}  this is the pointer variable that points to the variable which holds the condition mentioned above */}
      {/* below is the method 2 to output the content based on the conditions this is using the & symbol i which the code gets
       executed after the symbol if the condition is met*/}

      {/* {filteredExpenses.length === 0 && <p>no content to show</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExcerciseComp
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.expDate}
        />
      ))} */}

      {/* below is the method 1 to output the content based on the conditions */}

      {/* {filteredExpenses.length === 0 ? <p>no content to show</p> : filteredExpenses.map((expense) => (
        <ExcerciseComp
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.expDate}
        />
      ))} */}
      {/* {filteredExpenses.map((expense) => (
        <ExcerciseComp
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.expDate}
        />
      ))} */}
    </Cards>
  );
}
export default Expenses;
