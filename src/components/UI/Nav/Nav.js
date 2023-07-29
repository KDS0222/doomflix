import styled from "styled-components";
import NavTop from "./NavTop";
import NavBotton from "./NavBottom";

const NavContainer = styled.div`
  height: 100px;
  background-color: #000000;
  color: #1b1b1b;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Nav = (props) => {
  return (
    <NavContainer>
      <NavTop />
      <NavBotton inputSearchValue={props.inputSearchValue} movieData={props.movieData} />
    </NavContainer>
  );
};

export default Nav;
