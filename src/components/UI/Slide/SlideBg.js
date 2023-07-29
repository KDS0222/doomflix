import styled from "styled-components";

const SlideBgBox = styled.div`
  width: 100%;
  height: 100%;
`;


const SlideBg = (props) => {
    return <SlideBgBox>{props.children}</SlideBgBox>
}

export default SlideBg;