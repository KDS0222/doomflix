import styled from "styled-components";

const WrapperBox = styled.div`
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
`;

const Wrapper = (props) => {
  return (
    <WrapperBox
      maxWidth={props.maxWidth}
      width={props.width}
      height={props.height}
      display={props.display}
      justify={props.justify}
      align={props.align}
      margin={props.margin}
    >
      {props.children}
    </WrapperBox>
  );
};

export default Wrapper;
