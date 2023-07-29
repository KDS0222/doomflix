import styled from "styled-components";
import MainBannerSlide from "./UI/Slide/MainBannerSlide";
import MainContentsSlide from "./UI/Slide/MainContentsSlide";

const MainContainer = styled.div`
  background-color: #000000;
  padding-top: 100px;
  color: #ffffff;
  padding-bottom: 60px;
`;

const Main = (props) => {
  return (
    <MainContainer>
      <MainBannerSlide movieData={props.movieData} />
      <MainContentsSlide movieData={props.movieData} />
    </MainContainer>
  );
};

export default Main;
