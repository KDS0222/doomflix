import styled from "styled-components";

const AlignmentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    min-height: 100vh;
`

function Alignment(props){
    return <AlignmentWrapper>{props.children}</AlignmentWrapper>
}

export default Alignment;