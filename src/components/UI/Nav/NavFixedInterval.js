import styled from "styled-components";

const DetailsWrapper = styled.div`
    padding-top: 100px;
    background-color: #000000;
`;

const NavFixedInterval = (props) => {
    return <DetailsWrapper>{props.children}</DetailsWrapper>
}

export default NavFixedInterval;