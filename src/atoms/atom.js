import { atom } from "recoil";

export const loginedState = atom({
  key: "logined", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});


/*
    * 전역으로 상태관리 => login이 성공하면 ture상태를 NavTop에서 true를 받아서
    * 로그인 상태의 네비바를 처리.
    * 로그아웃하면 false를 atom에다가 리턴하고
    * 로그아웃을 누르기전까지는 조건문으로 로그인상태를 검증한다.
    * atom에서 boolean으로 검증.
*/ 