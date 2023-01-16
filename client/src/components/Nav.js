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
  }
  z-index: 997;
  position: fixed;
  width: 100%;
  height: auto;
  &:hover{
    transition: 0.5s;
  }
  &:not(:hover){
    transition: 0.5s ease-out;
  }
`
const NavTop = styled.div`
  position: relative;
  z-index: 996;
  width: 100%;
  padding-top: 20px;
  display: flex;

  .menu {
    width: 20px;
    height: 20px;
    padding-top: 5px;
    margin-left : 20px;
    cursor : pointer;

    @media screen and (min-width: 800px) {
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
  margin-right: 15px;
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

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  /* @media screen and (max-width: 1000px) {
    margin-right: 10px;
  } */
`

const NavMenu = styled.div`
  width: 100%;
  padding-left: 15px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`
const NavItem = styled.div`
  display: inline-block;
  margin-top: 5px;
  margin-left: 15px;

  span {
    font-weight: bold;
    font-size: 15px;
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

const NavDetail = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -45px;
  transition: 0.7s;
  transform: translateY(${props => props.y ? '0px' : '-500px'});
  min-height: 250px;
  display: flex;
  width: 100%;
  height: 22vw;
  max-height: 21.75vw;

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0.975) 15%,
    rgba(255, 255, 255, 0.9) 20%,
    rgba(255, 255, 255, 0.875) 25%,
    rgba(255, 255, 255, 0.85) 30%,
    rgba(255, 255, 255, 0.825) 35%,
    rgba(255, 255, 255, 0.8) 40%,
    rgba(255, 255, 255, 0.775) 45%,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(255, 255, 255, 0.725) 55%,
    rgba(255, 255, 255, 0.7) 60%,
    rgba(255, 255, 255, 0.675) 65%,
    rgba(255, 255, 255, 0.65) 70%,
    rgba(255, 255, 255, 0.625) 75%,
    rgba(255, 255, 255, 0.6) 80%,
    rgba(255, 255, 255, 0.575) 85%,
    rgba(255, 255, 255, 0.55) 90%,
    rgba(255, 255, 255, 0.525) 95%,
    rgba(255, 255, 255, 0.5) 100%
  );
    
  .productname {
    font-size: 14px;
    margin-bottom: 15px;
    font-family: NanumMyeongjo;
    width: fit-content;
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
    &:after {
      display:block;
      content: '';
      border-bottom: solid 2px black;  
      transform: scaleX(0);  
      transition: transform 0.2s ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin:  0% 50%;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`
const ProductNameBox = styled.div`

  display: inline-block;
  width: 10%;
  height: 100%;
  padding: 70px 0px 0px 30px; 
`

const ProductShowBox = styled.div`
  display: inline-block;
  padding: 55px 10px 10px 10px;
  width: 90%;
  height: 100%;
  .show {
    width: 100%;
    height: 100%;
    visibility: visible;
  }
  .hide {
    position: fixed;
    margin-left: 0px;
    visibility: hidden;
  }
  .out {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .photoitem {
    padding: 10px;
    position: absolute;
    height: 18vw;
    max-height: 18vw;
    width: 20%;
    transition: 1.5s;
  }
  .x1 {
    transform: translateX(100%);
  }
  .x2 {
    transform: translateX(200%);
  }
  .x3 {
    transform: translateX(300%);
  }
  .x4 {
    transform: translateX(400%);
  }
`
const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    box-shadow: 2px 2px 2px 0px;
    opacity: 0.8;
    &:hover {
      scale: 1.03;
      transition: 0.3s;
      opacity: 1;
    }
    &:not(:hover) {
      transition: 0.3s;
    }
`
const Nav = (props) => {
  const navigate = useNavigate();
  const wheel = props.wheel;
  const [open, setOpen] = useState(null);
  const [show, setShow] = useState(null);
  const [detailOpen, setDetailOpen] = useState(null);
  const [active, setActive] = useState(null);

  const openSideBar = () => {
    setOpen(true);
  }

  const closeSideBar = () => {
    setOpen(false);
  }

  return (
    <>
      <NavBox className={wheel == 'down' ? 'show' : null} onWheel={() => { setOpen(false); }}>
        <NavTop>

          <Col>
            <MdMenu className="menu" onClick={openSideBar} />
            {
              open == true
                ? <>
                  <Overlay show="visable" onClick={closeSideBar} />
                  <SideBar show="0px">
                    <MdOutlineClose onClick={closeSideBar} />
                  </SideBar>
                </>
                : <>
                  <Overlay show="hidden" />
                  <SideBar show="-300px">
                    <MdOutlineClose />
                  </SideBar>
                </>
            }
            <NavMenu>
              <NavItem>
                <span onMouseEnter={() => { setDetailOpen(true) }}>PRODUCT</span>
              </NavItem>
              <NavItem>
                <span>MORE</span>
              </NavItem>
            </NavMenu>
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
              <MdSearch />
              <MdOutlineShoppingBag />
              <MdPersonOutline />
            </UserMenu>
          </Col>
        </NavTop>
        <NavDetail y={detailOpen} onMouseLeave={() => { setDetailOpen(false); setShow(''); }}>
        <ProductNameBox>
          <p className="productname" onMouseEnter={() => { setShow('photo'); setActive(true); }} atv={active}>Photo</p>
          <p className="productname" onMouseEnter={() => { setShow('postcard'); }}>Postcard</p>
        </ProductNameBox>
        <ProductShowBox>
          <div className={show == 'photo' ? 'show' : 'hide'}>
            <div className="out">
              <div className="photoitem">
                <Image url="3.jpg" />
              </div>
              <div className={'photoitem' + `${show == 'photo' ? ' x1' : ''}`}>
                <Image url="4.jpg" />
              </div>
              <div className={'photoitem' + `${show == 'photo' ? ' x2' : ''}`}>
                <Image url="1.jpg" />
              </div>
              <div className={'photoitem' + `${show == 'photo' ? ' x3' : ''}`}>
                <Image url="2.jpg" />
              </div>
              <div className={'photoitem' + `${show == 'photo' ? ' x4' : ''}`}>
                <Image url="5.jpg" />
              </div>
            </div>
          </div>

          <div className={show == 'postcard' ? 'show' : 'hide'}>
            <div className="out">
              <div className="photoitem">
                <Image url="22.jpg" />
              </div>
              <div className={'photoitem' + `${show == 'postcard' ? ' x1' : ''}`}>
                <Image url="11.jpg" />
              </div>
              <div className={'photoitem' + `${show == 'postcard' ? ' x2' : ''}`}>
                <Image url="33.jpg" />
              </div>
              <div className={'photoitem' + `${show == 'postcard' ? ' x3' : ''}`}>
                <Image url="44.jpg" />
              </div>
              <div className={'photoitem' + `${show == 'postcard' ? ' x4' : ''}`}>
                <Image url="55.jpg" />
              </div>
            </div>
          </div>

        </ProductShowBox>
      </NavDetail>
      </NavBox>
    </>
  )
}

export default Nav;