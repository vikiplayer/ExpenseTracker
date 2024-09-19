import "./App.css";
import Card from "./components/UI/Card";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <Card>
      <Card>
        <NewExpense/>  
      </Card>
      <Card>
        <Expenses/>  
      </Card>
    </Card>
  )
}

export default App;
