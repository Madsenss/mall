import styled from "styled-components";
import { AiOutlineHeart, AiOutlineInstagram, AiOutlineShareAlt } from "react-icons/ai";
const DetailBox = styled.div`
  width: 100%;
  height: fit-content;
`
const DetailTop = styled.div`
  padding-top: 150px;
  margin: auto;
  width: 70%;
  height: fit-content;
  .title {
    font-size: 26px;
    text-align: center;
    font-family: NanumMyeongjo;
    margin-bottom: 20px;
    letter-spacing: 4px;
  }
  .price {
    text-align: center;
    font-family: NanumMyeongjo;
    font-weight: bold;
    color: #aaa;
    margin-bottom: 40px;
    letter-spacing: 4px;
  }
  .leftbox {
    display: inline-block;
    width: 55%;
    height: fit-content;
    img {
      width: 100%;
      box-shadow: 4px 4px 6px 0px rgb(180, 180, 180);
    }
  }
  .rightbox {
    width: 45%;
    padding: 0vw 1.3vw 0vw 1.3vw;
    display: inline-block;
    vertical-align: top;
    height: fit-content;
  }
  .subtitle {
    font-size: 0.8vw;
    font-family: NanumMyeongjo;
    line-height: 140%;
    margin-bottom: 15px;
  }
  select {
    box-shadow: 4px 4px 6px 0px rgb(180, 180, 180);
    cursor: pointer;
    width: 100%;
    height: 3vw;
    border: none;
    font-size: 0.9vw;
    padding-left: 0.8vw;
    border-radius:0;
    /* appearance: none; */
    margin-bottom: 20px;
  }

  .buttonbox {
    display: flex;
    justify-content: space-between;
  }
  .buycart {
    box-shadow: 4px 4px 6px 0px rgb(180, 180, 180);
    cursor: pointer;
    width: 48%;
    height: 3vw;
    display: inline-block;
    vertical-align: top;
    border: none;  
    background-color: #fff;
    font-size: 0.9vw;
    &:hover {
      border: 2px solid black;
    }
    margin-bottom: 17px;
  }
  .scroll {
    margin-top: 15px;
    text-align: center;
  }
  .iconbox {
    border-top: 1px solid #aaa;
    padding-top: 15px;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    .icon {
      cursor: pointer;
      border-radius: 50%;
      box-shadow: 2px 2px 4px 0px rgb(180, 180, 180);
      width: 3vw;
      height: 3vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5vw;
      &:hover {
        border: 2px solid #aaa;  
      }
    }
  }
`
const DetailBottom = styled.div`
  /* border: 1px solid black; */
  width: 70%;
  height: 1000px;
  margin: auto;
`

const Detail = () => {
  return (
    <>
      <DetailBox>
        <DetailTop>
          <h1 className="title">The Coaster</h1>
          <p className="price">&#8361;39,000</p>

          <div className="leftbox">
            <img src="4.jpg"/>
          </div>

          <div className="rightbox">
            
            <p className="subtitle">Straw print wide leg trouser. 100% Organic Cotton Made in India ONLY TO BE WORN BY INDIKIDUALS</p>
            <select>
              <option>11x14 Color Print</option>
              <option>16x20 Color Print + &#8361;19,000</option>
              <option>20x24 Color Print + &#8361;29,000</option>
            </select>

            <div className="buttonbox">
              <button className="buycart">Buy Now</button>
              <button className="buycart">Add to Cart</button>
            </div>
            <div className="iconbox">
              <div className="icon">
                <AiOutlineHeart/>
              </div>
              <div className="icon">
                <AiOutlineInstagram/>
              </div>
              <div className="icon">
                <AiOutlineShareAlt/>
              </div>
            </div>
            <p className="scroll">SCROLL DOWN FOR DETAIL OF IMAGE</p>
          </div>

        </DetailTop>
        <DetailBottom>1</DetailBottom>
      </DetailBox>
    </>
  );
};

export default Detail;