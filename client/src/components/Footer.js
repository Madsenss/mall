import styled from "styled-components";

const NavOuter = styled.div`
  width: 100%;
  padding: 1px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.45s;
  }
  &:not(:hover) {
    transition: 0.45s;
  }

`
const FooterNav = styled.div`
  width: 100%;
  margin: 25px 0px 25px 0px;

  .col {
    display: inline-block;
    width: 33.33%;
  }
  .rlinebox {
    width: 100%;
    height: 250px;
    &:hover {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.1) 10%,
        rgba(255, 255, 255, 0.15) 20%,
        rgba(255, 255, 255, 0.2) 30%,
        rgba(255, 255, 255, 0.25) 40%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0.35) 60%,
        rgba(255, 255, 255, 0.4) 70%,
        rgba(255, 255, 255, 0.45) 80%,
        rgba(255, 255, 255, 0.5) 90%,
        rgba(255, 255, 255, 0.55) 100%
      );

      border-right: 1.5px solid rgba(0, 0, 0, 0.15);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 40px;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0px 0px 40px 20px;
  }
  span {
    cursor: pointer;
    display: block;
    width: fit-content;
    font-family: NanumMyeongjo;
    margin: 0px 0px 20px 20px;
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
    margin: 15px 0px 15px 0px;
    .rlinebox {
      height: 150px;
    }
    h3 {
      margin: 0px 0px 20px 0px;
      text-align: center;
      font-size: 14px;
    }
    span {
      text-align: center;
      margin: auto;
      padding: 10px 0px 10px 0px;
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
  @media screen and (max-width: 1000px) {
    margin-top: 15px;
    .infotext {
      line-height: 100%;
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
  return (
    <>
      <NavOuter>     
        <FooterNav>
          <div className="col">
            <div className="rlinebox">
              <h3>Information</h3>
              <span>About</span>
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
            <div className="rlinebox">
              <h3>More View</h3>
              <span>Gallery</span>
              <span>Instagram</span>
            </div>    
          </div>
        </FooterNav>
      </NavOuter>

      <FooterInfo>
        <span className="infotext">Studio Uno | 김원 | 경기 안양시 동안구 시민대로 272 평촌동양트레벨파크 15층 Studio Uno </span><br/>
        <span className="infotext">031-123-4567 | leobinuss@gmail.com | 123-45-67890 | 2023-경기안양-2345</span><br/>
        <span className="infotext">© 2023 Studio Uno. All rights reserved.</span><br/>
        <span className="infotextedge">개인정보 취급 방침 | </span>
        <span className="infotextedge">이용 약관</span><br/>
        <NavLogo>
          <img src={process.env.PUBLIC_URL + '/logop2.png'} alt="logo" /> 
          <span>Studio Uno</span>
        </NavLogo>
      </FooterInfo>

    </>

  )
}

export default Footer;