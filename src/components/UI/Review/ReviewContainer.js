import styled from "styled-components";
import reviewBg from "../../../images/ico_review_bg.png";
import reviewStar from "../../../images/ico_review.png";
import Wrapper from "../Wrapper";

const VoteAverageBox = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const ReviewBgBox = styled.div`
  margin-top: 0 !important;
  margin-left: 10px;
  background-image: url(${reviewBg});
  background-size: cover;
  width: 120px;
  height: 20px;
  position: relative;
`;

const ReviewStar = styled.div`
  background-image: url(${reviewStar});
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${(props) => props.width + "%"};
`;

const ReviewContainer = (props) => {
  return (
    <VoteAverageBox>
      <Wrapper>평점 : {(props.movieDetails.vote_average / 2).toFixed(1)}</Wrapper>

      <ReviewBgBox>
        <ReviewStar width={(props.movieDetails.vote_average * 10).toFixed(1)} />
      </ReviewBgBox>
    </VoteAverageBox>
  );
};

export default ReviewContainer;
