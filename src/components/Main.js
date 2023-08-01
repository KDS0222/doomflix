import styled from "styled-components";
import MainContentsSlide from "./UI/Slide/MainContentsSlide";

const MainContainer = styled.div`
  background-color: #000000;
  padding-top: 100px;
  color: #ffffff;
  padding-bottom: 60px;
  min-height: calc(100vh - 100px);
`;

const Main = (props) => {
  return (
    <MainContainer>
      <MainContentsSlide movieData={props.movieData} />
    </MainContainer>
  );
};

export default Main;
