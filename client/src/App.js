import { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.js";
import Posts from "./components/Posts.js";
import Footer from "./components/Footer.js";
import ScrollUp from "./components/ScrollUp.js";
import About from "./components/about.js"

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

const Transparent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  cursor: pointer;
`

function App() {
  const [wheel, setWheel] = useState();
  const [y, setY] = useState();
  const content = useRef();
  const teleport = () => {content?.current.scrollIntoView({ behavior: 'smooth' })};
  const onWheel = (e) => {
    if(e.nativeEvent.wheelDelta > 0) {  
      setWheel('up');
    } else {
      setWheel('down');
    }
  }
  useEffect(()=>{
    var target = document.getElementById("content");
    var top = window.scrollY + target?.getBoundingClientRect().top;
    setY(top);
  });

  if(window.scrollY <= y) {
    if(wheel == 'down'){
      window.scrollTo({top : y, behavior : 'smooth'});
    }
  }
  
  return (
    <div className="App" onWheel={onWheel}>
      <Routes>
        <Route path="/" element={
          <>  
            <Bg url="bg.jpg">
              <Nav wheel={wheel}/>
              <Transparent onClick={()=>{
                teleport()
                setWheel('down');
              }}/>
              <div ref={content} id="content"/>
              <Posts/>
              <Footer/>
              <ScrollUp wheel={wheel}/>
            </Bg>
            
          </>
        }/>
        <Route path="/about" element={
          <>  
            <Bg url="about.jpg">
              <Nav wheel={wheel}/>
              <Transparent onClick={()=>{
                teleport()
                setWheel('down');
              }}/>
              <div ref={content} id="content"/>
              <About/>
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