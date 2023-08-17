import Alignment from "../../UI/Alignment";
import NavFixedInterval from "../../UI/Nav/NavFixedInterval";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

const LoginFormBox = styled.form`
  background-color: #252525;
  width: 400px;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
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

function SingUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    Confirm.show(
      "알림",
      "회원가입 하시겠습니까?",
      "Yes",
      "No",
      () => {
        Report.success(
          "회원가입 완료!",
          "축하합니다. 회원가입에 성공했습니다.",
          "확인"
        );
      },
      () => {
        Report.info("알림 정보", "회원가입이 취소되었습니다.", "확인");
      }
    );
  };

  return (
    <NavFixedInterval>
      <Alignment>
        <LoginFormBox onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>회원가입</FormTitle>

          <Input
            type="text"
            {...register("id", {
              required: true,
              pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i,
            })}
            aria-invalid={errors.id ? "true" : "false"}
            placeholder="이메일을 입력해주세요."
          />
          {errors.id && (
            <InputErrors>이메일 형식이 옳바르지 않습니다.</InputErrors>
          )}

          <Input
            type="password"
            {...register("pwd", { required: "비밀번호를 입력해주세요." })}
            aria-invalid={errors.pwd ? "true" : "false"}
            placeholder="비밀번호"
          />

          {errors.pwd && <InputErrors>{errors.pwd.message}</InputErrors>}
          <FormSubmitButton type="submit" margintop="40px" value="회원가입" />
        </LoginFormBox>
      </Alignment>
    </NavFixedInterval>
  );
}

export default SingUp;
