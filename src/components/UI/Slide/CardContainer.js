import styled from "styled-components";

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    background-color: #000000;
    height: ${props => props.height};
`

const CardContainer = (props) => {
    return <Container>{props.children}</Container>;
}

export default CardContainer;