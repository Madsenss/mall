import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Bg from "./components/Bg.js";

function App() {
  return (
    <div className="App" style={{height : '1000px'}}>
      <Routes>
        <Route path="/" element={<><Nav /><Bg /></>} />
      </Routes> 
    </div>
  );
}

export default App;