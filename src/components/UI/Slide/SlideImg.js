import styled from "styled-components";
import { Link } from "react-router-dom";

const SlideImgBox = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

const SlideImg = (props) => {
  return <SlideImgBox src={props.src} />;
};

export default SlideImg;
