import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import './App.css';

const App = () => {
  return (
    <div className="App App-header">
			<NavBar/>
      <Outlet/>
    </div>
  );
}

export default App;
