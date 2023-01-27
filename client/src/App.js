import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Layout from "./components/Layout.js";
import Footer from "./components/Footer.js";
import ScrollUp from "./components/ScrollUp.js";
import { useState, useRef } from "react";
import styled from "styled-components";


const Bg = styled.div`
  width: 100%;
  height: max-content;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`
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
  const content = useRef();
  const teleport = () => content.current.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="App" onWheel={onWheel}>
      <Routes>
        <Route path="/" element={
          <>       
            <Bg url="3.jpg">
              <Nav wheel={wheel}/>
              <Layout/>
              <Footer/>
              <ScrollUp wheel={wheel}/>
            </Bg>
          </>
        }/>
      </Routes> 
    </div>
  );
}

export default App;