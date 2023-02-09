import { useState } from "react";
import styled from "styled-components";
import { MdOutlineShoppingCart, MdShare } from "react-icons/md"
const TabBox = styled.div`
  background-color: #fff;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  font-family: NanumMyeongjo;
  padding: 50px 0px 50px 0px;
`
const Tab = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  margin: 10px;
  width: 80px;
  height: 30px;
  box-shadow: 1px 1px 5px 0px rgb(200, 200, 200);

  &.active {
    font-weight: bold;
    border: 2px solid #aaa;
    transition: 0.3s;
  }

  &:hover {
    font-weight: bold;
    border: 2px solid #aaa;
    animation-name: shake;
    animation-duration: 0.7s;
  }

  @keyframes shake {
    0% { transform: rotate(0deg) }
    25% { transform: rotate(-2deg) }
    50% { transform: rotate(2deg) }
    75% { transform: rotate(-2deg) }
    100% { transform: rotate(0deg) }
  }

`
const PostBox = styled.div`
  width: 100%;
  min-height: 60vw;
  background-color: #fff;
`
const PostInnerBox = styled.div`
  width: 75%;
  height: fit-content;
  display: block;
  margin: auto;
  background-color: #fff;
`
const PostItem = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 25%;
  height: fit-content;
  vertical-align: middle;
  .imgbox {
    position: relative;
    margin: auto;
    width: 15vw;
    height: 15vw;
    background-image: url('4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    &:hover .pricebox {
      transform: translateY(0vw);
    }
    .pricebox {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 2vw;
      background-color: rgb(255, 255, 255, 0.8);
      transform: translateY(2vw);
      transition: 0.5s;
    }
    .infobox {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      .icon {
        font-size: 1.1vw;
        margin-right: 0.4vw;
        transition: 0.2s;
        &:hover {
          
          color: #aaa;
        }
      }
      .price {
        font-size: 0.9vw;
        font-family: NanumMyeongjo;
        font-weight: bold;
        margin-left: 7.5vw;
      }
    }
  }
  .textbox {
    font-family: NanumMyeongjo;
    padding: 0vw 0vw 0vw 2vw;
    font-size: 0.9vw;
    .title {
      font-weight: bold;
      margin: 7px 0px 3px 0px;
    }
    .subtitle {
      border-top: 1px solid #aaa;
      color: #aaa;
      height: 100px;
      max-width: 14.6vw;
      padding-top: 2px;
    }
  }
`

const Posts = () => { 
  const [tab, setTab] = useState('all');
  return (
    <>
      <TabBox>
        <Tab className={tab == 'all' ? 'active' : null} onClick={()=>{setTab('all')}}>all</Tab>
        <Tab className={tab == 'objet' ? 'active' : null} onClick={()=>{setTab('objet')}}>objet</Tab>
        <Tab className={tab == 'photo' ? 'active' : null} onClick={()=>{setTab('photo')}}>photo</Tab>
        <Tab className={tab == 'postcard' ? 'active' : null} onClick={()=>{setTab('postcard')}}>postcard</Tab>
        <Tab className={tab == 'wallpaper' ? 'active' : null} onClick={()=>{setTab('wallpaper')}}>wallpaper</Tab>
      </TabBox>
      <PostBox>
        <PostInnerBox>
          <PostItem>
            <div className="imgbox">
              <div className="pricebox">
                <div className="infobox">
                  <MdOutlineShoppingCart className="icon"/>
                  <MdShare className="icon"/>
                  <span className="price">&#8361;39,000</span>
                </div>
              </div>
            </div>
            <div className="textbox">
              <p className="title">the coaster</p>
              <p className="subtitle">objects with a european sensibility</p>
              {/* <p className="price">&#8361;39,000</p> */}
            </div>
          </PostItem>
          <PostItem>
            <div className="imgbox">
                <div className="pricebox">
                  <div className="infobox">
                    <MdOutlineShoppingCart className="icon"/>
                    <MdShare className="icon"/>
                    <span className="price">&#8361;39,000</span>
                  </div>
                </div>
              </div>
            <div className="textbox">
              <p className="title">the coaster</p>
              <p className="subtitle">유럽 감성스타일 오브제입니다 가나다라</p>
              {/* <p className="price">&#8361;39,000</p> */}
            </div>
          </PostItem>
          <PostItem>
          <div className="imgbox">
              <div className="pricebox">
                <div className="infobox">
                  <MdOutlineShoppingCart className="icon"/>
                  <MdShare className="icon"/>
                  <span className="price">&#8361;39,000</span>
                </div>
              </div>
            </div>
            <div className="textbox">
              <p className="title">the coaster</p>
              <p className="subtitle">유럽 감성스타일 오브제입니다 가나다라마바사아자차카타</p>
              {/* <p className="price">&#8361;39,000</p> */}
            </div>
          </PostItem>
          <PostItem>
          <div className="imgbox">
              <div className="pricebox">
                <div className="infobox">
                  <MdOutlineShoppingCart className="icon"/>
                  <MdShare className="icon"/>
                  <span className="price">&#8361;39,000</span>
                </div>
              </div>
            </div>
            <div className="textbox">
              <p className="title">the coaster</p>
              <p className="subtitle">objects with a european sensibilityas sensibilityas</p>
              {/* <p className="price">&#8361;39,000</p> */}
            </div>
          </PostItem>      
        </PostInnerBox>
      </PostBox>
    </>
  )
}

export default Posts;