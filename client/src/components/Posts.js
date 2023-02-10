import { useState } from "react";
import styled from "styled-components";
import { MdOutlineShoppingCart, MdShare } from "react-icons/md"
import { useNavigate } from "react-router-dom";

const TabText = styled.div`
  text-align: center;
  background-color: rgb(255, 255, 255, 0.9);
  /* background-color: #fff; */
  font-size: 2vw;
  font-weight: bold;
  padding: 1.5vw 0vw 1vw 0vw;
  font-family: NanumMyeongjo;
`
const TabBox = styled.div`
  background-color: rgb(255, 255, 255, 0.9);
  /* background-color: #fff; */
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 0vw 0vw 3vw 0vw;
`

const Tab = styled.div`
  font-family: NanumMyeongjo;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin: 0.8vw;
  width: 4.7vw;
  height: 1.8vw;
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
  position: relative;
  z-index: 996;
  width: 100%;
  min-height: 60vw;
  background-color: rgb(255, 255, 255, 0.9);
  /* background-color: #fff; */
`
const PostInnerBox = styled.div`
  width: 75%;
  height: fit-content;
  display: block;
  margin: auto;
`
const PostItem = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 25%;
  height: fit-content;
  vertical-align: top;
  /* border: 1px solid black; */
  &:hover .textbox > .subtitle {
    border-top: 1px solid rgb(0, 0, 0, 0.8);
    color: rgb(0, 0, 0, 0.8);
  }
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
      /* background-color: rgb(255, 255, 255, 0.6); */
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
    font-size: 0.8vw;
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
  const path = window.location.pathname;
  const navigate = useNavigate();
  const count = [0,1,2,3,4,5,6,7,8,9,1,1,1];
  return (
    <>
      <TabText>
        {path == '/' ? 'All Products' : null}
        {path == '/objet' ? 'Objet' : null}
        {path == '/photo' ? 'Photo' : null}
        {path == '/postcard' ? 'Postcard' : null}
        {path == '/wallpaper' ? 'Wallpaler' : null}
      </TabText>
      <TabBox>
        <Tab className={path == '/' ? 'active' : null} onClick={()=>{navigate('/');}}>all</Tab>
        <Tab className={path == '/objet' ? 'active' : null} onClick={()=>{navigate('/objet');}}>objet</Tab>
        <Tab className={path == '/photo' ? 'active' : null} onClick={()=>{navigate('/photo');}}>photo</Tab>
        <Tab className={path == '/postcard' ? 'active' : null} onClick={()=>{navigate('/postcard');}}>postcard</Tab>
        <Tab className={path == '/wallpaper' ? 'active' : null} onClick={()=>{navigate('/wallpaper');}}>wallpaper</Tab>
      </TabBox>
      <PostBox>
        <PostInnerBox>
          {count.map((item, i)=>{
            return (
              <PostItem onClick={()=>{navigate('/detail'); window.scrollTo({top : 0, behavior : 'auto'});}}>
                <div className="imgbox">
                  <div className="pricebox">
                    <div className="infobox">
                      <MdOutlineShoppingCart className="icon"/>
                      <MdShare className="icon"/>
                      {/* <span className="price">&#8361;39,000</span> */}
                      <span className="price">&#8361;39,000</span>
                    </div>
                  </div>
                </div>
                <div className="textbox">
                  <p className="title">the coaster</p>
                  <p className="subtitle">objects with a european sensibility</p>
                </div>
            </PostItem> 
            )
          })}
   
        </PostInnerBox>
      </PostBox>
    </>
  )
}

export default Posts;