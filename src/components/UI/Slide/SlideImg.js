import styled from "styled-components";

const SlideImgBox = styled.img`
  width: 100%;
  height: 440px;
  border-radius: 10px;
  cursor: pointer;
`;

const SlideImg = (props) => {
  return <SlideImgBox src={props.src} />;
};

export default SlideImg;
