import "./App.css";
import { Navbar, Sidebar } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sidebarAndContent">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
