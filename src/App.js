import "./App.css";
import { Navbar, Sidebar, OrderDetails } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebarAndContent">
        <Sidebar />
        <OrderDetails />
      </div>
    </div>
  );
}

export default App;
