import "./App.css";
import SalesByRegion from "./components/salesByRegion";
import SalesByMonth from "./components/salesByMonth";
import SalesByProduct from "./components/salesByProduct";
import TopFiveReps from "./components/topFiveReps";

function App() {
  return <div className="dashboard-root">
    <header>
        <h1>Office Depot</h1>
        <h2>Sales Dashboard</h2>
    </header>
    <div className="dashboard-grid">
        <div className="dashboard-card"><SalesByRegion/></div>
        <div className="dashboard-card"><SalesByMonth/></div>
        <div className="dashboard-card"><TopFiveReps/></div>
        <div className="dashboard-card"><SalesByProduct/></div>
    </div>
  </div>;
}

export default App;
