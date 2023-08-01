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

const ContentsSlide = (props) => {
  return (
    <div>
      <Swiper
        slidesPerView={props.slidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="Main__mySwiper"
        
      >
        {props.popular &&
          props.popular.map((value) => (
            <SwiperSlide key={uuid()}>
              <Link to={"/details/" + value.id} key={uuid()}>
                <SlideImg
                  key={uuid()}
                  src={"https://image.tmdb.org/t/p/w500" + value.backdrop_path}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ContentsSlide;
