import SlideContentsBox from "./SlideContentsBox";
import CardContainer from "./CardContainer";


const MainContentsSlide = (props) => {
    return (
        <CardContainer heigth="380px">
            <SlideContentsBox movieData={props.movieData.nowplaying}>Movie Now Playing</SlideContentsBox>
            <SlideContentsBox movieData={props.movieData.popular}>Movie Popular</SlideContentsBox>
            <SlideContentsBox movieData={props.movieData.rated}>Movie Top Rated</SlideContentsBox>
            <SlideContentsBox movieData={props.movieData.upcoming}>Movie Upcoming</SlideContentsBox>
        </CardContainer>
    );
}

export default MainContentsSlide;