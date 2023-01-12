import styled from "styled-components";

const NavOuter = styled.div`
  width: 100%;
  padding: 1px;
  &:hover {
    background-color: white;
    transition: 0.45s
    
  }
  &:not(:hover) {
    transition: 0.45s;
  }
  &:hover .rlinebox {
    border-right: 1.5px solid lightgray;
  }
`
const FooterNav = styled.div`
  width: 100%;
  margin: 30px 0px 30px 0px;

  .col {
    display: inline-block;
    width: 33.33%;
  }
  .rlinebox {
    width: 100%;
    height: 300px;
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
    margin: 0px 0px 20px 32px;
    &:hover {
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1000px) {
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
      display: block;
      width: auto;
      text-align: center;
      font-size: 12px;
      margin: 0px 0px 20px 0px;
    }
  }
`

const FooterInfo = styled.div`
  width: 100%;
  /* height: fit-content; */
  text-align: center;
  margin-top: 20px;
  .infotext {
    font-size: 13px;
    line-height: 170%;
  }
  .infotextedge {
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
            <div className="rlinebox" style={{ borderRight: 'none' }}>
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