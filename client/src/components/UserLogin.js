import styled from "styled-components";

const LoginBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoginInner = styled.div`
  width: fit-content;
  height: 500px;
  p {
    cursor: pointer;
    margin-top: 15px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
`
const LoginLogo = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30px;
    margin-right: 5px;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    margin-right: 15px;
  }
`

const InputBox = styled.div`
  padding-top: 10px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InputInner = styled.div`
  position: relative;
  width: fit-content;
  
  input {
    width: 300px;
    height: 30px;
    position: relative;
    background: none;
    font-size: 16px;
    border: none;
    border: 1.5px solid #aaa;
    padding-left: 10px;
  }
  input:hover {
    border: 1.5px solid black;
  }
  input:focus { 
    outline: none;
    border: 1.5px solid #fff;
  }
  input:valid {
    border: 1.5px solid #eee;
  }
  label {
    font-size: 14px;
    position: absolute;
    color: #aaa;
    left: 15px;
    bottom: 8px;
    transition: all 0.2s;
  }

  input:focus ~ label, input:valid ~ label {
    bottom: 25px;
    left: 7px;
    font-weight: bold;
    color: black;
  }

`
const MenuBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  /* border: 1px solid red; */
  span {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 5px;
    margin-left: 10px;
  }
`
const Kakao = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0px;
  bottom: 11px;
  background-image: url('kakao.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const Naver = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 45px;
  background-image: url('naver.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const UserLogin = () => {
  return (
    <>
      <LoginBox>
        <LoginInner>
          <LoginLogo>
            <img src={process.env.PUBLIC_URL + '/logop2.png'} alt="logo" />
            <span>Studio Uno</span>
          </LoginLogo>
          <InputBox>
            <InputInner>
              <input type="text" required/>
              <label>ID</label>
            </InputInner>
          </InputBox>
          <InputBox>
            <InputInner>
              <input type="password" required/>
              <label>Password</label>
            </InputInner>
          </InputBox>
          <MenuBox>
            <span>ID 찾기</span>
            <span>비밀번호 찾기</span>
            <Naver/>
            <Kakao/>
          </MenuBox>
          <p>회원가입</p>
        </LoginInner>
      </LoginBox>
    </>
  );
};

export default UserLogin;