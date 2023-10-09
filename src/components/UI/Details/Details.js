import styled from "styled-components";
import NavFixedInterval from "../Nav/NavFixedInterval";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetailBox from "./MovieDetailBox";
import SlideContentsBox from "../Slide/SlideContentsBox";
import Wrapper from "../Wrapper";

const DetailsBox = styled.div`
  background-color: #000000;
  width: 100%;
  height: calc(100vh - 100px);
`;

const DetailsContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: #000000;
`;

const Details = (props) => {
  const [movieDetails, setMovieDetails] = useState("");
  const [video, setVideo] = useState("");
  const params = useParams();

  const DetailsFetch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=1efe7e9dcfe999d6d25a99f91164d434`
    );

    const result = await response.json();

    const viedoResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=1efe7e9dcfe999d6d25a99f91164d434`
    );

    const viedoResult = await viedoResponse.json();

    const videoKey = viedoResult.results[0]?.key;

    // const videoKey = viedoResult.results[0]? viedoResult.results[0].key : null;

    setMovieDetails(result);

    setVideo(videoKey);
  };

  console.log(props);

  useEffect(() => {
    DetailsFetch();
  }, [params.id]);


  console.log(params.id);

  console.log(props.movieData);
  return (
    <NavFixedInterval>
      <DetailsBox>
        <DetailsContainer>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path}
            alt="image설명"
          />

          <MovieDetailBox videoKey={video} movieDetails={movieDetails} />
        </DetailsContainer>
      </DetailsBox>

      <Wrapper maxWidth="1440px" margin="0 auto">
        <SlideContentsBox movieData={props.recommendData.nowplaying}>
          Recommend
        </SlideContentsBox>
      </Wrapper>
    </NavFixedInterval>
  );
};

export default Details;
