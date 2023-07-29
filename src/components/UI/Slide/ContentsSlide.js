import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideImg from "./SlideImg";
import SlideBg from "./SlideBg";
import SliderContents from "./SliderContents";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import uuid from "react-uuid";

const SlideBox = styled.div`
  height: 300px;
  border-radius: 10px;
`;

const ContentsSlide = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.popular &&
          props.popular.map((value) => (
            <SlideBox key={uuid()}>
              <SlideBg key={uuid()}>
                <SliderContents key={uuid()}>
                  <Link to={"/details/" + value.id}>
                    <SlideImg key={uuid()}
                      src={
                        "https://image.tmdb.org/t/p/w500" + value.backdrop_path
                      }
                    />
                  </Link>
                </SliderContents>
              </SlideBg>
            </SlideBox>
          ))}
      </Slider>
    </div>
  );
};

export default ContentsSlide;
