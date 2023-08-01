import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideImg from "./SlideImg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import uuid from "react-uuid";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperSlideCustom = styled(SwiperSlide)`
  height: 480px;
  object-fit: cover;
`;

const MainBannerSlide = (props) => {
  {props.movieData.nowplaying &&
  console.log(props.movieData.nowplaying.slice(10))}
  return (
    <div>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {props.movieData.nowplaying &&
          props.movieData.nowplaying.map((value) => (
            <SwiperSlideCustom key={uuid()}>
              <Link to={"/details/" + value.id} key={uuid()}>
                <SlideImg
                  key={uuid()}
                  src={"https://image.tmdb.org/t/p/w500" + value.backdrop_path}
                />
              </Link>
            </SwiperSlideCustom>
          ))}
      </Swiper>
    </div>
  );
};

export default MainBannerSlide;
