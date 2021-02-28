import logo from "./logo.svg";
import "./App.css";
import DateTime from "./components/DateTime";
import DataTable from "./components/DataTable";
function App() {
  return (
    <div className="App">
      <h1 class="rowC">
        Задачи на &nbsp; <DateTime />
      </h1>
     <DataTable/>
    </div>
  );
}

export default App;
