import Expenses from "./components/Expenses";
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

  return (
    <div className="App">
      <Expenses items={expenses} />

      {/* <ExcerciseComp>{year}</ExcerciseComp> */}
    </div>
  );
}

export default App;
