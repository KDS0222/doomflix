import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideImg from "./SlideImg";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const scrollMoveHandler = () => {
  window.scrollTo({ left: 0, top: 0 })
};

const ContentsSlide = (props) => {
  return (
    <div>
      <Swiper
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
        className="Main__mySwiper"
        breakpoints={{
          // when window width is >= 320px
          1200:{
            slidesPerView: 5,
            spaceBetween: 20
          },

          700:{
            slidesPerView: 3,
            spaceBetween: 20
          },

          480:{
            slidesPerView: 2,
            spaceBetween: 20
          },
        }}
      >
        {props.popular &&
          props.popular.map((value) => (
            <SwiperSlide key={uuid()}>
              <Link state={value} onClick={scrollMoveHandler} to={"/details/" + value.id} key={uuid()}>
                <SlideImg
                  key={uuid()}
                  src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ContentsSlide;
