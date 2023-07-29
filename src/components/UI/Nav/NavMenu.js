import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavMenuLi = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #2f2f2f;
  }
`;

const NavLinkBox = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  color: #a5a5a5;
  text-decoration: none;
`;

const NavMenu = (props) => {
    return(
        <NavMenuLi>
          <NavLinkBox>{props.children}</NavLinkBox>
        </NavMenuLi>
    );
}

export default NavMenu;