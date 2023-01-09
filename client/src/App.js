import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App" style={{height : '1000px'}}>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes> 
    </div>
  );
}

export default App;