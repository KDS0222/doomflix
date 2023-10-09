import styled from "styled-components";

const SlideImgBox = styled.img`
  width: 100%;
  height: 440px;
  cursor: pointer;
  transition: 0.5s;

  &:hover{
    scale: 1.08;
    transition: 0.5s;
  }

`;

const SlideImg = (props) => {
  return <SlideImgBox src={props.src} />;
};

export default SlideImg;
