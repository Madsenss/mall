import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Layout from "./components/Layout.js";
import Footer from "./components/Footer.js";
import ScrollUp from "./components/ScrollUp.js";
import { useState } from "react";


function App() {
  const [wheel, setWheel] = useState();
  const onWheel = (e) => {
    if(e.nativeEvent.wheelDelta > 0) {  
      if(wheel == 'up') return null;
      setWheel('up');
    } else {
      if(wheel == 'down') return null;
      setWheel('down');
    }
  }
  return (
    <div className="App" onWheel={onWheel}>
      <Routes>
        <Route path="/" element={
          <> 
            <Nav wheel={wheel}/>
            <Layout/>
            <Footer/>
            <ScrollUp wheel={wheel}/>
          </>
        }/>
      </Routes> 
    </div>
  );
}

export default App;