import styled from "styled-components";
import Wrapper from "../Wrapper";

const NoSearchText = styled.h1`
    font-size: 28px;
    font-weight: 600;
`

const NoSearchResult = () => {
    return (
        <Wrapper display="flex" justify="center" align="center" height="calc(100vh - 100px)">
            <NoSearchText>No results were found for your search</NoSearchText>
        </Wrapper>
    );
}

export default NoSearchResult;