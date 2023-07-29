import styled from "styled-components";

const DetailsWrapper = styled.div`
    padding-top: 100px;
`;

const NavMainMargin = (props) => {
    return <DetailsWrapper>{props.children}</DetailsWrapper>
}

export default NavMainMargin;