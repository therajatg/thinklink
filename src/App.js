import "./App.css";
import { Navbar, Sidebar, OrderDetails, SalesDetail } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebarAndContent">
        <Sidebar />
        <OrderDetails />
        <SalesDetail />
      </div>
    </div>
  );
}

export default App;
