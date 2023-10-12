import Alignment from "../../UI/Alignment";
import NavFixedInterval from "../../UI/Nav/NavFixedInterval";
import styled from "styled-components";
import { Report } from "notiflix";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginedState } from "../../../atoms/atom";

const LoginFormBox = styled.form`
  background-color: #252525;
  width: 400px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const FormSubmitButton = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 18px;
  border: none;
  background-color: #1351f9;
  color: #ffffff;
  font-size: 16px;
  margin-top: ${(props) => props.margintop};
  cursor: pointer;
`;

const FormTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`;

const InputErrors = styled.p`
  margin-top: 10px;
  width: 80%;
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
`;

const Input = styled.input`
  &:not(:first-child) {
    margin-top: 40px;
  }

  box-sizing: border-box;
  padding: 0 18px;
  width: 80%;
  height: 40px;
  border: none;
`;

function SignIn(props) {
  const [logined, setlogined] = useRecoilState(loginedState);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if (data.id === props.userInfo.id && data.pwd === props.userInfo.pwd) {
      Report.success(`${data.id}님 환영합니다!`,
      "",
      "확인",
      setlogined(true),
      goToMain());
    } else {
      Report.failure("아이디가 일치하지 않습니다.", "", "확인");
    }
  };

  return (
    <NavFixedInterval>
      <Alignment>
        <LoginFormBox onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>로그인</FormTitle>

          <Input
            {...register("id", {
              required: "이메일 또는 아이디를 입력해주세요.",
            })}
            aria-invalid={errors.id ? "true" : "false"}
            placeholder="이메일 또는 아이디"
          />
          {errors.id && <InputErrors>{errors.id.message}</InputErrors>}

          <Input
            type="password"
            {...register("pwd", { required: "비밀번호를 입력해주세요." })}
            aria-invalid={errors.pwd ? "true" : "false"}
            placeholder="비밀번호"
          />

          {errors.pwd && <InputErrors>{errors.pwd.message}</InputErrors>}
          <FormSubmitButton type="submit" margintop="40px" value="로그인" />
        </LoginFormBox>
      </Alignment>
    </NavFixedInterval>
  );
}

export default SignIn;
