import { PATH } from "@/app/router";
import lgGoogle from "@/assets/imgs/ic_google.png";
import lgKakao from "@/assets/imgs/ic_kakao.png";
import lgLogo from "@/assets/imgs/lgLogo.png";
import BlueButton from "@/components/common/BlueButton";
import Input from "@/components/common/Input";
import PassWordInput from "@/components/common/PassWordInput";
import { media } from "@/styles/media";
import { isMinLength, isSameString, isValidEmail } from "@/utils";
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const initialFormState = {
  userEmail: "",
  userNickName: "",
  userPassword: "",
  userPasswordCheck: "",
  touched: {
    userEmail: false,
    userNickName: false,
    userPassword: false,
    userPasswordCheck: false,
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

const getNickNameError = (value, touched) => {
  if (!touched) return "";

  if (value.trim() === "") return "닉네임을 입력해주세요.";

  return "";
};

const getPasswordError = (value, touched) => {
  const length = 12;

  if (!touched) return "";

  if (value.trim() === "") return "비밀번호를 입력해주세요.";
  if (isMinLength(value, length))
    return `비밀번호를 ${length}자 이상 입력해주세요.`;

  return "";
};

const getPasswordCheckError = (value, password, touched) => {
  if (!touched) return "";

  if (value.trim() === "") return "비밀번호 확인을 입력해주세요.";
  if (!isSameString(value, password)) return "비밀번호가 일치하지 않습니다.";

  return "";
};

const SignupPage = () => {
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const { userEmail, userNickName, userPassword, userPasswordCheck, touched } =
    formState;

  const emailError = getEmailError(userEmail, touched.userEmail);
  const nickNameError = getNickNameError(userNickName, touched.userNickName);
  const passwordError = getPasswordError(userPassword, touched.userPassword);
  const passwordCheckError = getPasswordCheckError(
    userPasswordCheck,
    userPassword,
    touched.userPasswordCheck
  );

  const isValid =
    userEmail.trim() !== "" &&
    userNickName.trim() !== "" &&
    userPassword.trim() !== "" &&
    userPasswordCheck.trim() !== "" &&
    !emailError &&
    !nickNameError &&
    !passwordError &&
    !passwordCheckError;

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

    const submitValues = {
      userEmail,
      userNickName,
      userPassword,
      userPasswordCheck,
    };

    console.log("제출 값:", submitValues);
    navigate(PATH.LOGIN);
    dispatch({ type: "RESET" });
  };

  return (
    <Main>
      <Section>
        <LogoTitle>
          <Link to={PATH.INDEX}>
            <img src={lgLogo} alt="판다마켓 로고" />
          </Link>
        </LogoTitle>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
          onSubmit={handleSubmit}
        >
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
          <Input
            value={userNickName}
            label="닉네임"
            id="userNickName"
            type="text"
            placeholder="닉네임을 입력해주세요"
            error={nickNameError}
            onChange={handleChange("userNickName")}
            onBlur={handleBlur("userNickName")}
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
          <PassWordInput
            value={userPasswordCheck}
            label="비밀번호 확인"
            id="userPasswordCheck"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            error={passwordCheckError}
            onChange={handleChange("userPasswordCheck")}
            onBlur={handleBlur("userPasswordCheck")}
          />
          <BlueButton size="lg" radius="max" type="submit" disabled={!isValid}>
            회원가입
          </BlueButton>
        </form>
        <EaseLoginContainer>
          간편 로그인 하기
          <ul>
            <EaseLoginItem>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={lgGoogle} alt="구글 아이콘" />
              </a>
            </EaseLoginItem>
            <EaseLoginItem>
              <a
                href="https://www.kakaocorp.com/page/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={lgKakao} alt="카카오 아이콘" />
              </a>
            </EaseLoginItem>
          </ul>
        </EaseLoginContainer>

        <ToBottom>
          이미 회원이신가요?
          <Link to={PATH.LOGIN}>로그인</Link>
        </ToBottom>
      </Section>
    </Main>
  );
};

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${media.mobile} {
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  min-height: 100vh;
  width: 640px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const LogoTitle = styled.h1`
  width: 396px;
  height: 132px;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media ${media.mobile} {
    width: 198px;
    height: 66px;
    margin-bottom: 0px;
  }
`;

export const EaseLoginContainer = styled.div`
  width: 100%;
  padding: 16px 24px;
  border-radius: 16px;
  background-color: #e6f2ff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: var(--gray800);

  ul {
    display: flex;
    gap: 16px;
  }
`;

export const EaseLoginItem = styled.li`
  width: 42px;
  height: auto;
  img {
    width: 42px;
    height: auto;
    display: block;
  }
`;

export const ToBottom = styled.div`
  color: var(--gray800);
  font-weight: 500;
  font-size: 1.4rem;

  a {
    color: var(--blue100);
    text-decoration: underline;
    margin-left: 4px;

    &:hover {
      color: var(--blue200);
    }
  }
`;

export default SignupPage;
