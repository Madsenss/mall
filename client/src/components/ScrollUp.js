import { useState } from "react";
import { MdNorth } from "react-icons/md";
import styled from "styled-components";

const IconBox = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 996;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  visibility: hidden;
  transition: 0.5s;
  opacity: 0;
  .up {
    color: white;
    padding-top: 25%;
    font-size: 30px;
  }
  &.show {
    visibility: visible;
    transition: 0.5s;
    opacity: 1;
  }
  &:hover .up {
    color: black;
    transition: 0.3s;
  }
  &:hover {
    background: none;
    margin-bottom: 10px;
  }
`

const ScrollUp = (props) => {
  const wheel = props.wheel;
  return (
    <IconBox id="icon" className={wheel == 'up' ? 'show' : ''}>
      <MdNorth className="up" onClick={()=>{
        window.scrollTo({
          top: 0,
          behavior : 'smooth'          
        });
      }} />
    </IconBox>
  )
}

export default ScrollUp;