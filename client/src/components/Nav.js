import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdSearch, MdOutlineShoppingBag, MdPersonOutline, MdMenu, MdOutlineClose } from "react-icons/md"
import { useState } from "react";
const Col = styled.div`
  width: 33.3333%;
`
const NavBox = styled.div`
  &.show{
    transform: translateY(-200px);
    /* transition: ease-in-out; */
  }
  z-index: 997;
  position: fixed;
  width: 100%;
  height: auto;
  &:hover{
    /* background-color: #eee; */
    transition: 0.5s;
  }
  &:not(:hover){
    transition: 0.5s ease-out;
  }
`
const NavTop = styled.div`
  width: 100%;
  margin: 0px 0px 20px 0px;
  padding-top: 20px;
  display: flex;
  .tt{
    border: 1px solid black;
  }
  .menu {
    width: 20px;
    height: 20px;
    padding-top: 5px;
    margin-left : 20px;
    cursor : pointer;
    @media screen and (min-width: 1000px) {
      display: none;
    }
    &:hover {
      animation-name: shake;
      animation-duration: 0.7s;
    }
    @keyframes shake {
      0% { transform: rotate(0deg) }
      25% { transform: rotate(-10deg) }
      50% { transform: rotate(10deg) }
      75% { transform: rotate(-10deg) }
      100% { transform: rotate(0deg) }
    }
  }
`
const SideBar = styled.div`
  width: 300px;
  height: 101%;
  margin-top: -50px;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  transform: translateX(${props => props.show});
  transition: 0.5s;
  
  svg {
    width: 25px;
    height: 25px;
    margin: 10px 10px 0px 0px;
    float: right;
    cursor: pointer;
    &:hover{
      opacity: 0.3;
      transition: 0.2s;
    }
    &:not(:hover){
      transition: 0.2s;
    }
  }
`
const Overlay = styled.div`
  margin-top: -50px;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 998;
  visibility: ${props => props.show};
`

const NavLogo = styled.div`
  display: table;
  margin: auto;
  text-align: center;
  cursor: pointer;
  width: fit-content;
  img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 5px;
  }
  span {
    vertical-align: middle;
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 4px;
    span {
      font-size: 17px;
    }
    img {
      width: 22px;
      height: 22px;
    }
  }
`
const UserMenu = styled.div`
  float: right;
  margin-right: 50px;
  padding-top: 5px;
  svg {
    vertical-align: middle;
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin: 0px 5px 0px 5px;
    &:hover{
      opacity: 0.3;
      transition: 0.3s;
    }
    &:not(:hover){
      transition: 0.3s;
    }
  }

  span {
    vertical-align: middle;
    cursor: pointer;
    margin: 0px 4px 0px 4px;
    font-size: 14px;
    font-weight: bold;
    &:hover{
      opacity: 0.3;
      transition: 0.3s;
    }
    &:not(:hover){
      transition: 0.3s;
    }
    &.none{
      cursor: default;
      &:hover{
        opacity: 1;
      }
    }
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  @media screen and (max-width: 1000px) {
    margin-right: 10px;
  }
`
const NavBottom = styled.div`
  width: 100%;
  text-align: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
const NavItem = styled.div`
  display: inline-block;
  padding: 15px;
  span {
    font-weight: bold;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;

    &:after {
      display:block;
      content: '';
      border-bottom: solid 2px black;  
      transform: scaleX(0);  
      transition: transform 0.2s ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }
`

const Nav = (props) => {
  const wheel = props.wheel;
  const [open, setOpen] = useState(null);
  const openSideBar = () => {
    setOpen(true);
  }
  const closeSideBar = () => {
    setOpen(false);
  }
  const navigate = useNavigate();
  return (
    <NavBox className={wheel == 'down' ? 'show' : null} onWheel={()=>{setOpen(false)}}>
      <NavTop>
        
        <Col>
          <MdMenu className="menu" onClick={openSideBar}/>
          {
            open == true
            ? <>
                <Overlay show="visable" onClick={closeSideBar}/>
                <SideBar show="0px">
                  <MdOutlineClose onClick={closeSideBar} />
                </SideBar>
              </>
            : <>
                <Overlay show="hidden"/>
                <SideBar show="-300px">
                  <MdOutlineClose/>
                </SideBar>
              </>

          }
        </Col>
        <Col>
          <NavLogo>
            <img src={process.env.PUBLIC_URL + '/logop2.png'} alt="logo" /> 
            <span>Studio Uno</span>
          </NavLogo>
        </Col>
        
        <Col>
          <UserMenu>
            <span>Login</span>
            <span className="none">|</span>
            <span>Join</span>
            <MdSearch/>
            <MdOutlineShoppingBag/>
            <MdPersonOutline/>
          </UserMenu>
        </Col>
        
      </NavTop>

      <NavBottom>

        <NavItem>
          <span>Product</span>
        </NavItem>
        <NavItem>
          <span>More</span>
        </NavItem>


      </NavBottom>

    </NavBox>
  )
}

export default Nav;