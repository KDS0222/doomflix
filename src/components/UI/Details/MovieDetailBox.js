import styled from "styled-components";
import Wrapper from "../Wrapper";
import uuid from "react-uuid";
import ReviewContainer from "../Review/ReviewContainer";

const MovieDetailInfoBox = styled.div`
  margin-left: 30px;
  margin-bottom: 30px;

  & *:not(:first-child) {
    margin-top: 15px;
  }
`;

const Overview = styled.p`
  color: #ffffff;
  font-size: 18px;
  line-height: 28px;
`;

const MovieTitle = styled.h1`
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
`;

const GenresBox = styled.span`
  color: #ffffff;
  font-size: 18px;
  margin-right: 10px;
`;


const MovieDetailBox = (props) => {
    const movieDetails = props.movieDetails;

    return (
        <MovieDetailInfoBox>
            <MovieTitle>{movieDetails.title}</MovieTitle>

            <Wrapper>
              {movieDetails &&
                movieDetails.genres.map((value) => (
                  <GenresBox key={uuid()}>{value.name}</GenresBox>
                ))}

              <ReviewContainer movieDetails={movieDetails} />

              <Overview>{movieDetails.overview}</Overview>
            </Wrapper>
          </MovieDetailInfoBox>
    );
}

export default MovieDetailBox;