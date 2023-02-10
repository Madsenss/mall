import styled from "styled-components";

const DetailBox = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #fff;
`
const DetailTop = styled.div`
  padding-top: 150px;
  border: 1px solid black;
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
    margin-bottom: 50px;
  }
  select {
    width: 100%;
    height: 3vw;
    border: 1px solid #aaa;
    font-size: 0.9vw;
    padding-left: 0.8vw;
    border-radius:0;
    /* appearance: none; */
  }
  select:hover {
    background-color: #aaa;
    color: white;
  }
  option {
    background-color: white;
    color: black;
  }
  option:hover {
    background-color: #aaa;
  }
`

const Detail = () => {
  return (
    <>
      <DetailBox>
        <DetailTop>
          <h1 className="title">The Coaster</h1>
          <p className="price">&#8361;39,000</p>
          <div className="leftbox">
            <img src="22.jpg"/>
          </div>
          <div className="rightbox">
            <p className="subtitle">Straw print wide leg trouser. 100% Organic Cotton Made in India ONLY TO BE WORN BY INDIKIDUALS</p>
            <select>
              <option>11x14 Color Print</option>
              <option>16x20 Color Print</option>
              <option>20x24 Color Print</option>
            </select>
            <button>1</button>
          </div>
        </DetailTop>
      </DetailBox>
    </>
  );
};

export default Detail;