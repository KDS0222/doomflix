import styled from "styled-components";
import ContentsSlide from "./ContentsSlide";
import "../../../App.css";


const ContentTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-top: 40px;
`;

const SlideContentsBox = (props) => {
  return (
    <>
      <ContentTitle className="logo" marginBottom="20px">{props.children}</ContentTitle>
      <ContentsSlide popular={props.movieData}/>
    </>
  );
};

export default SlideContentsBox;
