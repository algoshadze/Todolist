import logo from "./logo.svg";
import "./App.css";
import DateTime from "./components/DateTime";
import DataTable from "./components/DataTable";
import Add from './components/Add'
function App() {
  return (
    <div className="App">
      <h1 class="rowC">
        Задачи на &nbsp; <DateTime />
      </h1>
      <br/><br/><br/>
     <DataTable/>
     <Add />
    </div>
  );
}

export default App;
