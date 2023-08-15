import styled from "styled-components";
import NavMenu from "./NavMenu";
import { Routes, Route, Link } from "react-router-dom";
import SingIn from "../../Layout/Form/SingIn";

const NavTopBox = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const NavMenuUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const NavTopHr = styled.div`
  width: 100%;
  border-bottom: 1px solid #2f2f2f;
`;

const NavMenuLink = styled(Link)`
  color: #a5a5a5;
`

const NavTop = () => {
  return (
    <NavTopHr>
      <NavTopBox>
        <NavMenuUl>

          <NavMenu>
            <NavMenuLink to="/singIn">로그인</NavMenuLink>
          </NavMenu>

          <NavMenu>
            <NavMenuLink to="/singUp">회원가입</NavMenuLink>
          </NavMenu>

          {/* <NavMenu>마이페이지</NavMenu> */}
        </NavMenuUl>
      </NavTopBox>
    </NavTopHr>
  );
};

export default NavTop;
