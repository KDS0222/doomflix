import styled from "styled-components";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginedState, textState } from "../../../atoms/atom";

const NavTopBox = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 90%;
  }
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
`;

const LoginOutBtn = styled.button`
  border: none;
  background: none;
  font-size: 12px;
  font-weight: 500;
  color: #a5a5a5;
  text-decoration: none;
  cursor: pointer;
`;

const LoginUserText = styled.span`
  color: #a5a5a5;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

const NavTop = (props) => {
  const userInfoId = localStorage.getItem("userInfo");
  const [logined, setlogined] = useRecoilState(loginedState);

  const loginOutClickHandler = () => {
    setlogined(false);
  };

  console.log(logined);

  return (
    <NavTopHr>
      <NavTopBox>
        <NavMenuUl>
          {logined === false ? (
            <>
              <NavMenu>
                <NavMenuLink to="/singIn">로그인</NavMenuLink>
              </NavMenu>

              <NavMenu>
                <NavMenuLink to="/singUp">회원가입</NavMenuLink>
              </NavMenu>
            </>
          ) : (
            <>
              <LoginUserText>{userInfoId}님 환영합니다!</LoginUserText>
              <LoginOutBtn onClick={loginOutClickHandler}>로그아웃</LoginOutBtn>
            </>
          )}
        </NavMenuUl>
      </NavTopBox>
    </NavTopHr>
  );
};

export default NavTop;
