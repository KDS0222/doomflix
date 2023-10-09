import SlideContentsBox from "./SlideContentsBox";
import CardContainer from "./CardContainer";
import NoSearchResult from "../Search/NoSearchResult";

const MainContentsSlide = (props) => {
  return (
    <CardContainer heigth="380px">
      {props.movieData.nowplaying?.length < 1 &&
      props.movieData.popular?.length < 1 &&
      props.movieData.rated?.length < 1 &&
      props.movieData.upcoming?.length < 1 ? (
        <NoSearchResult />
      ) : (
        <>
          <SlideContentsBox movieData={props.movieData.nowplaying}>
            Movie Now Playing
          </SlideContentsBox>
          <SlideContentsBox movieData={props.movieData.popular}>
            Movie Popular
          </SlideContentsBox>
          <SlideContentsBox movieData={props.movieData.rated}>
            Movie Top Rated
          </SlideContentsBox>
          <SlideContentsBox movieData={props.movieData.upcoming}>
            Movie Upcoming
          </SlideContentsBox>
        </>
      )}
    </CardContainer>
  );
};

export default MainContentsSlide;
