import styled from "styled-components";

const AboutBox = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #fff;
  padding: 200px 0px 250px 0px;
  img {
    width: 200px;
    height: 200px;
    display: block;
    margin: auto;
  }

  h1 {
    display: block;
    margin: auto;
    padding-bottom: 30px;
    text-align : center;
    font-family: NanumMyeongjo;
  }

  p {
    display: block;
    margin: auto;
    max-width: 40%;
    font-family: NanumMyeongjo;
    line-height: 150%;
  }
  @media screen and (max-width: 1200px) {
    p {
      max-width: 60%;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 20px 0px 50px 0px;
    p {
      max-width: 80%;
    }
  }
`

const ContactBox = styled.div`
  display: block;
  margin: auto;
  max-width: 40%;
  height: 500px;
  margin-top: 200px;
  border-radius: 2%;
  box-shadow: 0.5px 0.5px 2px 1px;

  background-image: url('aboutcontact.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  @media screen and (max-width: 1200px) {
    max-width: 60%;
  }
  @media screen and (max-width: 500px) {
    max-width: 80%;
  }
`
const TopBox = styled.div` 
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  border: 2px solid white;
  h1 {
    color: white;
  }
`

const LeftBox = styled.div`
  float: left;
  width: 50%;
  height: 90%;
  border: 2px solid red;
`

const RightBox = styled.div`
  float: left;
  width: 50%;
  height: 90%;
  border: 2px solid blue;
`

const Input = styled.input`
  /* display: block; */
  font-family: NanumMyeongjo;
  margin-top: 30px;
  border-top: none;
  border-left:none;
  border-right: none;
  border-bottom: 2px solid white;
  background-color:transparent;
  font-size: 16px;
  text-align: center;
  color: white;
  &:focus {
    outline: none;
    color : white;
  }
  &::placeholder {
    color:white;
    font-size: 15px;
    text-align: center;
  }
`
const SendButton = styled.button`
  display: block;
  margin: auto;
  margin-top: 240px;
  width: 200px;
  height: 30px;
  background-color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 2%;
  box-shadow: 0px 4px 0px 1px rgb(150,150,150);
  font-family: NanumMyeongjo;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    margin-top: 242px;
    box-shadow: 0px 1px 0px 0px rgb(150,150,150);
  }
`

const TextArea = styled.textarea`
  font-family: NanumMyeongjo;
  font-size: 16px;
  text-align: center;
  color: white;
  border: 2px solid white;
  border-radius: 2%;
  background-color: transparent;
  &:focus {
    outline: none;
    color : white;
  }
  &::placeholder {
    color:white;
    font-size: 16px;
    text-align: center;
  }
`

const About = () => {
  return (
    <>
      <AboutBox>
        <img src={process.env.PUBLIC_URL + '/logop2.png'} alt="logo" />
        <h1>studio uno</h1>
        <p>
          스튜디오 우노의 디자인 철학이 함축된 형태입니다. 형태의 기본요소 점, 선, 면과 기능과 맞닿은 요소 호, 직교등이 함께 어우러지지요. 자연의 가장 안정된 상태인 구, 혹은 원형을 인공의 직선과 대비하여 서로를 강조합니다. 자연물은 인공물과 함께일 때 가장 두드러진다고 생각합니다. 주어진 기능과 아름다운 형태를 최소한의 구조로 담아내고자 합니다.
          <br /><br />
          스튜디오 우노는 오브제의 심미성에 기능을 더하는 작업을 합니다. 자연물의 물성과 그 각각의 요소들의 관계에서 영감을 얻기를 원합니다. 그 영감을 제품화하면, 그 제품이 또다른 자극을 이끌어내지 않을까해요.
          <br /><br />
          스튜디오 우노에서는 시각적인 제품과 함께 후각적인 자극도 함께합니다. 공감각적 자극을 통해 더욱 풍요로운 경험을 했으면 하는 바람입니다.
          <br /><br /><br /><br />
          It is a form implied by studio uno's design philosophy. The basic elements of form include points, lines, and faces. Factors in contact with the function include arc and orthogonalism. And these two elements come together as one. The most stable state of nature is sphere or circle. It emphasizes each other in contrast to artificial straight lines. I think natural objects stand out the most when they are with artifacts. We would like to capture the given functions and beautiful forms with minimal structure.
          <br /><br />
          studio uno works to add function to the aesthetics of the object. I want to be inspired by the relationship between the physical properties of natural objects and their respective elements. If the inspiration is commercialized, I think the product will lead to another stimulus.
          <br /><br />
          studio uno offers visual products and olfactory stimulation. I hope you will have a richer experience through synesthesia stimulation.
        </p>
        <ContactBox>
          <TopBox>
            <h1>Contact Us</h1>
          </TopBox>
          <LeftBox>
            <Input placeholder="Name"/>
            <Input placeholder="Email"/>
            <Input placeholder="Phone"/>
            <SendButton>Send</SendButton>
          </LeftBox>
          <RightBox>
            <TextArea placeholder="Message"/>
          </RightBox>
        </ContactBox>
      </AboutBox>

    </>
  )
}

export default About;