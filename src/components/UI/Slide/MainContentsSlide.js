import SlideContentsBox from "./SlideContentsBox";
import CardContainer from "./CardContainer";

const MainContentsSlide = (props) => {
    return (
        <CardContainer heigth="380px">
            <SlideContentsBox movieData={props.movieData.nowplaying}></SlideContentsBox>
            <SlideContentsBox movieData={props.movieData.popular}>popular(인기 영화)</SlideContentsBox>
            <SlideContentsBox movieData={props.movieData.rated}>TopRated(최고 평점)</SlideContentsBox>
            <SlideContentsBox movieData={props.movieData.upcoming}>upcoming(개봉 영화)</SlideContentsBox>
        </CardContainer>
    );
}

export default MainContentsSlide;