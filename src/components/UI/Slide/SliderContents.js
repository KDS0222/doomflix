import styled from "styled-components";

const SliderContentsBox = styled.div`
  height: 90%;
  margin: 20px 20px 20px 0;
  border-radius: 10px;
`;


const SliderContents = (props) => {
    return <SliderContentsBox>{props.children}</SliderContentsBox>
}

export default SliderContents;