import ContentsSlide from "./ContentsSlide";

const SlideBannerContentsBox = (props) => {
  return (
    <>
      <ContentsSlide popular={props.movieData} slidesPerView="1.8" />
    </>
  );
};

export default SlideBannerContentsBox;
