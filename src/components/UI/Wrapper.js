import styled from "styled-components";

const WrapperBox = styled.div`
    
`;

const Wrapper = (props) => {
    return <WrapperBox>{props.children}</WrapperBox>
}

export default Wrapper;