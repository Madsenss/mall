import { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.js";
import Posts from "./components/Posts.js";
import Footer from "./components/Footer.js";
import ScrollUp from "./components/ScrollUp.js";
import About from "./components/about.js"

import styled from "styled-components";
import Detail from "./components/Detail.js";
import UserLogin from "./components/UserLogin.js";
import Join from "./components/Join.js";



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
  &:hover .pathtext {
    transform: translateX(0vw) rotate(0deg);
    opacity: 1;
    color: black;
  }
  .pathtext {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8vw;
    font-family: NanumMyeongjo;
    transition: 1.3s;
    transform: translateX(-45vw) rotate(90deg);
    opacity: 0.2;
    color: white;
  }
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
              <Transparent onClick={()=>{teleport(); setWheel('down');}}>
                <span className="pathtext">All Products</span>
              </Transparent>
              <div ref={content} id="content"/>
              <Posts/>
              <Footer/>
              <ScrollUp wheel={wheel}/>
            </Bg>    
          </>
        }/>
        <Route path="/objet" element={
          <>  
            <Bg url="2.jpg">
              <Nav wheel={wheel}/>
              <Transparent onClick={()=>{teleport(); setWheel('down');}}>
                <span className="pathtext">Objet</span>
              </Transparent>
              <div ref={content} id="content"/>
              <Posts/>
              <Footer/>
              <ScrollUp wheel={wheel}/>
            </Bg>    
          </>
        }/>
        <Route path="/photo" element={
          <>  
            <Bg url="11.jpg">
              <Nav wheel={wheel}/>
              <Transparent onClick={()=>{teleport(); setWheel('down');}}>
                <span className="pathtext">Photo</span>
              </Transparent>
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
        <Route path="/detail" element={
          <>  
            <Bg url="paper2.jpg">
              <Nav wheel={wheel}/>
              <Detail/>
              <Footer/>
              <ScrollUp wheel={wheel}/>
            </Bg>      
          </>
        }/>
        <Route path="/login" element={
          <>  
            <Bg url="1.jpg">
              <UserLogin/>
            </Bg>    
          </>
        }/>
        <Route path="/join" element={
          <>  
            <Bg url="paper2.jpg">
            </Bg>    
          </>
        }/>
      </Routes> 
    </div>
  );
}

export default App;