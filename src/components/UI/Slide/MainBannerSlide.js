import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideImg from "./SlideImg";
import SlideBg from "./SlideBg";
import SliderContents from "./SliderContents";
import uuid from "react-uuid";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CardContainer from "./CardContainer";


const BannerSlideBox = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 500px;
  border-radius: 10px;
`;

const MainBannerSlide = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <CardContainer heigth="500px">
      <Slider {...settings}>
        {props.movieData.nowplaying &&
          props.movieData.nowplaying.map((value) => (
            <BannerSlideBox key={uuid()}>
              <SlideBg>
                <SliderContents movieId={value.id}>
                  <Link to={"/details/" + value.id}>
                    <SlideImg
                      key={uuid()}
                      src={
                        "https://image.tmdb.org/t/p/w500" + value.backdrop_path
                      }
                    />
                  </Link>
                </SliderContents>
              </SlideBg>
            </BannerSlideBox>
          ))}
      </Slider>
    </CardContainer>
  );
};

export default MainBannerSlide;
