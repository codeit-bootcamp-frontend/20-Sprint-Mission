import { PATH } from "@/app/router";
import lgGoogle from "@/assets/imgs/ic_google.png";
import lgKakao from "@/assets/imgs/ic_kakao.png";
import lgLogo from "@/assets/imgs/lgLogo.png";
import BlueButton from "@/components/common/BlueButton";
import Input from "@/components/common/Input";
import PassWordInput from "@/components/common/PassWordInput";
import { hasMinLength } from "@/utils/common";
import { isValidEmail } from "@/utils/string";
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styles";
const initialFormState = {
  userEmail: "",
  userPassword: "",
  touched: {
    userEmail: false,
    userPassword: false,
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "BLUR":
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.name]: true,
        },
      };
    case "RESET":
      return initialFormState;
    default:
      return state;
  }
};

const getEmailError = (value, touched) => {
  if (!touched) return "";

  if (value.trim() === "") return "이메일을 입력해주세요.";
  if (!isValidEmail(value)) return "잘못된 이메일 형식입니다.";

  return "";
};

const getPasswordError = (value, touched) => {
  const length = 12;

  if (!touched) return "";

  if (value.trim() === "") return "비밀번호를 입력해주세요.";
  if (!hasMinLength(value, length))
    return `비밀번호를 ${length}자 이상 입력해주세요.`;

  return "";
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const { userEmail, userPassword, touched } = formState;

  const emailError = getEmailError(userEmail, touched.userEmail);
  const passwordError = getPasswordError(userPassword, touched.userPassword);

  // 아무것도 안 쳤을 때도 버튼 활성화 되지 않게 value 체크 추가
  const isValid =
    userEmail.trim() !== "" &&
    userPassword.trim() !== "" &&
    !emailError &&
    !passwordError;

  const handleChange = (name) => (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      name,
      value: e.target.value,
    });
  };

  const handleBlur = (name) => () => {
    dispatch({ type: "BLUR", name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    console.log("제출 값:", formState);
    navigate(PATH.ITEMS);
    dispatch({ type: "RESET" });
  };

  return (
    <S.Main>
      <S.Section>
        <S.LogoTitle>
          <Link to={PATH.INDEX}>
            <img src={lgLogo} alt="판다마켓 로고" />
          </Link>
        </S.LogoTitle>
        <S.Form onSubmit={handleSubmit}>
          <Input
            value={userEmail}
            label="이메일"
            id="userEmail"
            type="email"
            placeholder="이메일을 입력해주세요"
            error={emailError}
            onChange={handleChange("userEmail")}
            onBlur={handleBlur("userEmail")}
          />
          <PassWordInput
            value={userPassword}
            label="비밀번호"
            id="userPassword"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            error={passwordError}
            onChange={handleChange("userPassword")}
            onBlur={handleBlur("userPassword")}
          />
          <BlueButton size="lg" radius="max" type="submit" disabled={!isValid}>
            로그인
          </BlueButton>
        </S.Form>
        <S.EaseLoginContainer>
          간편 로그인 하기
          <ul>
            <S.EaseLoginItem>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={lgGoogle} alt="구글 아이콘" />
              </a>
            </S.EaseLoginItem>
            <S.EaseLoginItem>
              <a
                href="https://www.kakaocorp.com/page/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={lgKakao} alt="카카오 아이콘" />
              </a>
            </S.EaseLoginItem>
          </ul>
        </S.EaseLoginContainer>
        <S.ToBottom>
          판다마켓이 처음이신가요?
          <Link to={PATH.SIGNUP}>회원가입</Link>
        </S.ToBottom>
      </S.Section>
    </S.Main>
  );
};

export default LoginPage;
