import styled from "styled-components";
import NavMainMargin from "../Nav/NavMainMargin";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetailBox from "./MovieDetailBox";

const DetailsBox = styled.div`
  background-color: gray;
  width: 100%;
  height: calc(100vh - 100px);
`;

const DetailsContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  background-color: #000000;
`;

const Details = () => {
  const [movieDetails, setMovieDetails] = useState("");
  const params = useParams();

  const DetailsFetch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=1efe7e9dcfe999d6d25a99f91164d434`
    );

    const result = await response.json();

    console.log(result);
    setMovieDetails(result);
  };

  useEffect(() => {
    DetailsFetch();
  }, []);

  return (
    <NavMainMargin>
      <DetailsBox>
        <DetailsContainer>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path}
            alt="image설명"
          />

          <MovieDetailBox movieDetails={movieDetails} />
        </DetailsContainer>
      </DetailsBox>
    </NavMainMargin>
  );
};

export default Details;
