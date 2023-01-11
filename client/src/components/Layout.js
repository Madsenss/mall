import styled from "styled-components";
const Back = styled.div`
  background-image: url('bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: auto;
`
const Test = styled.div`
  /* transform: translateY(100%); */
  width: 100%;
  height: 800px;
  background-color: #fff;
  text-align: center;
  /* background-color: blue; */
  /* background-color: transparent; */
  h1 {
    padding-top: 500px;
  }
`
const Layout = () => {
  return (
    <>
    <Back>
      <Test>
        <h1>CONTENT AREA</h1>
      </Test>
    </Back>
    </>
  )
}

export default Layout;