import { useRef } from "react";
import styled from "styled-components";

const Transparent = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid red;
  cursor: pointer;
`
const Test2 = styled.div`
  /* transform: translateY(100%); */
  width: 100%;
  height: 1200px;
  text-align: center;
  background-color: #fff;
  /* background-color: blue; */
  /* background-color: transparent; */
  h1 {
    /* padding-top: 500px; */
  }
`


const Layout = () => {
  const content = useRef();
  const teleport = () => content.current.scrollIntoView({ behavior: 'smooth' });
  return (
    <>
      <Transparent onClick={teleport}/> 
      <Test2 ref={content}>
        <h1>CONTENT AREA33</h1>
      </Test2>

    </>
  )
}

export default Layout;