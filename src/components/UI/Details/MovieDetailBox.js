import styled from "styled-components";
import Wrapper from "../Wrapper";
import uuid from "react-uuid";
import ReviewContainer from "../Review/ReviewContainer";

const MovieDetailInfoBox = styled.div`
  margin-left: 30px;

  & *:not(:first-child) {
    margin-top: 15px;
  }

  @media (max-width: 1200px) {
    margin-left: 0px;
  }
`;

const Overview = styled.p`
  color: #ffffff;
  font-size: 18px;
  line-height: 28px;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const MovieTitle = styled.h1`
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 1200px) {
    font-size: 24px;
  }
`;

const GenresBox = styled.span`
  color: #ffffff;
  font-size: 18px;
  margin-right: 10px;
`;

const YoubuteVideo = styled.iframe`
  width: 100%;
  height: 500px;

  @media (max-width: 1200px) {
    display: block;
    margin: 0 auto;
  }
`

const MovieDetailBox = (props) => {
  const movieDetails = props?.movieDetails;

  return (
    <MovieDetailInfoBox>
      {props.videoKey !== "" ? (
        <YoubuteVideo
          src={`https://www.youtube.com/embed/${props.videoKey}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></YoubuteVideo>
      ): null}
      <MovieTitle className="detailsTitle">{movieDetails.title}</MovieTitle>

      <Wrapper>
        {movieDetails &&
          movieDetails.genres.map((value) => (
            <GenresBox className="detailsTitle" key={uuid()}>{value.name}</GenresBox>
          ))}

        <ReviewContainer movieDetails={movieDetails} />

        <Overview className="OverviewFontg">{movieDetails.overview}</Overview>
      </Wrapper>
    </MovieDetailInfoBox>
  );
};

export default MovieDetailBox;
