/* eslint-disable no-unused-vars */
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/newExpense";
import "./App.css";

function App() {
  const expenses = [
    {
      title: "travelling charges",
      amount: 291,
      expDate: new Date(2021,12,21).toISOString(),
    },
    {
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
      expDate: new Date(2023,10,10).toISOString(),
    },
  ];
  const gettingDataHandler=(data)=>{
    console.log(data);
  };

  return (
    <div className="App">
      <NewExpense onGetData={gettingDataHandler}/>
      <Expenses items={expenses} />

      {/* <ExcerciseComp>{year}</ExcerciseComp> */}
    </div>
  );
}

export default App;
