import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavOuter = styled.div`
  width: 100%;
  padding: 1px;
`
const FooterNav = styled.div`
  width: 100%;
  margin: 25px 0px 25px 0px;
  text-align: center;

  .col {
    display: inline-block;
    width: 33.33%;
  }
  .rlinebox {
    width: 100%;
    height: 200px;
  }
  h3 {
    font-family: NanumMyeongjo;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  span {
    cursor: pointer;
    display: block;
    width: fit-content;
    font-family: NanumMyeongjo;
    margin: auto;
    margin-bottom: 20px;
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
    .rlinebox {
      height: 120px;
    }
    h3 {
      margin-bottom: 20px;
      font-size: 14px;
    }
    span {
      font-size: 12px;
    }
  }
`

const FooterInfo = styled.div`
  width: 100%;
  /* height: fit-content; */
  text-align: center;
  margin-top: 20px;
  .infotext {
    font-family: NanumMyeongjo;
    font-size: 13px;
    line-height: 170%;
  }
  .infotextedge {
    font-family: NanumMyeongjo;
    cursor: pointer;
    font-size: 13px;
    line-height: 170%;
    &:hover {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 800px) {
    margin-top: 15px;
    .infotext, .infotextedge {
      line-height: 100%;
      font-size: 10px;
    }
  }
`
const NavLogo = styled.div`
  display: table;
  margin: auto;
  text-align: center;
  cursor: pointer;
  width: fit-content;
  margin-top: 10px;
  padding-bottom: 20px;
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
 
`
const Footer = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  return (
    <>
      <NavOuter>     
        <FooterNav style={{color : path == '/about' ? '#eee' : null}}>
          <div className="col">
            <div className="rlinebox">
              <h3>Information</h3>
              <span onClick={()=>{navigate('/about'); window.scrollTo({top : 0, behavior : 'smooth'});}}>About</span>
              <span>Product</span>
            </div>      
          </div>
          <div className="col">
            <div className="rlinebox">
              <h3>Customer Service</h3>
              <span>FAQ</span>
              <span>Review</span>
            </div> 
          </div>
          <div className="col">
            {/* <div className="rlinebox" style={{borderRight : 'none'}}> */}
            <div className="rlinebox">
              <h3>More View</h3>
              <span>Gallery</span>
              <span>Instagram</span>
            </div>    
          </div>
        </FooterNav>
      </NavOuter>

      <FooterInfo style={{color : path == '/about' ? '#eee' : null}}>
        <span className="infotext">Studio Uno | 김원 | 경기 안양시 동안구 시민대로 272 평촌동양트레벨파크 15층 Studio Uno </span><br/>
        <span className="infotext">031-123-4567 | leobinuss@gmail.com | 123-45-67890 | 2023-경기안양-2345</span><br/>
        <span className="infotext">© 2023 Studio Uno. All rights reserved.</span><br/>
        <span className="infotextedge">개인정보 취급 방침 | </span>
        <span className="infotextedge">이용 약관</span><br/>
        <NavLogo style={{color : 'black'}}>
          <img src={process.env.PUBLIC_URL + '/logop2.png'} alt="logo" /> 
          <span>Studio Uno</span>
        </NavLogo>
      </FooterInfo>

    </>

  )
}

export default Footer;