import styled from "styled-components";

const Image = styled.img`
  background-image: url('bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
`
const Bg = () => {
  return (
    <Image />
  )
}

export default Bg;