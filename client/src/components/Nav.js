import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdSearch, MdOutlineShoppingBag, MdPersonOutline, MdMenu } from "react-icons/md"
import { useState } from "react";
const Col = styled.div`
  width: 33.33%;
`
const NavBox = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  &:hover{
    background-color: #eee;
    transition: 0.5s;
  }
  &:not(:hover){
    transition: 0.5s ease-out;
  }
`
const NavTop = styled.div`
  width: 100%;
  margin: 20px 0px 20px 0px;
  display: flex;
`
const SideBar = styled.div`
  svg{
    cursor: pointer;
    margin: 0px 0px 0px 20px;
    width: 20px;
    height: 20px;
  }
`
const NavLogo = styled.div`
  display: table;
  margin: auto;
  text-align: center;
  cursor: pointer;
  width: 150px;
  img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 5px;
  }
  span {
    vertical-align: middle;
    font-size: 20px;
    margin-right: 5px;
  }
 
`
const UserMenu = styled.div`
  float: right;
  margin-right: 50px;
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
    margin: 0px 5px 0px 5px;
    font-size: 16px;
    &:hover{
      opacity: 0.3;
      transition: 0.3s;
    }
    &:not(:hover){
      transition: 0.3s;
    }
    @media screen and (max-width: 1000px) {
      display: none;
    }
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

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleSideBar = () => {
    setOpen(true);
  }
  const navigate = useNavigate();
  return (
    <NavBox>
      
      <NavTop>
        <Col>
          <SideBar>
            <MdMenu onClick={toggleSideBar} />
          </SideBar>
        </Col>
        <Col>
          <NavLogo>
            <img src={process.env.PUBLIC_URL + '/logo192.png'} /> 
            <span>React Store</span>
          </NavLogo>
        </Col>
        
        <Col>
          <UserMenu>
            <span>Login</span>
            <span style={{cursor : 'default !important'}}>|</span>
            <span>Join</span>
            <MdSearch />
            <MdOutlineShoppingBag />
            <MdPersonOutline />
          </UserMenu>
        </Col>
        
      </NavTop>

      <NavBottom>

        <NavItem>
          <span>Apple</span>
        </NavItem>
        <NavItem>
          <span>Samsung</span>
        </NavItem>
        <NavItem>
          <span>Macsafe</span>
        </NavItem>
        <NavItem>
          <span>Event</span>
        </NavItem>
        <NavItem>
          <span>Community</span>
        </NavItem>

      </NavBottom>

    </NavBox>
  )
}

export default Nav;