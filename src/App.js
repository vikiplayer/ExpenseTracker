import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <div>
      <div>
        <NewExpense/>  
      </div>
      <div>
        <Expenses/>  
      </div>
    </div>
  )
}

export default App;
