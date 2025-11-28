import { PATH } from "@/app/router";
import lgGoogle from "@/assets/imgs/ic_google.png";
import lgKakao from "@/assets/imgs/ic_kakao.png";
import lgLogo from "@/assets/imgs/lgLogo.png";
import AuthShell from "@/components/AuthShell";
import SchemaForm from "@/components/inputForm/SchemaForm";
import { isEmpty, isMinLength, isValidEmail } from "@/utils";
import { useNavigate } from "react-router-dom";

const AUTHSHELL_CONTENT = {
  logo: { href: PATH.INDEX, image: lgLogo, imageAlt: "판다마켓 로고" },
  easeLogin: {
    title: "간편 로그인 하기",
    items: [
      { href: "https://www.google.com/", img: lgGoogle, alt: "구글 아이콘" },
      {
        href: "https://www.kakaocorp.com/page/",
        img: lgKakao,
        alt: "카카오 아이콘",
      },
    ],
  },
  bottom: {
    text: "판다마켓이 처음이신가요?",
    link: { to: PATH.SIGNUP, text: "회원가입" },
  },
};

const FIELDS = [
  {
    index: 1,
    rules: [
      {
        element: "input",
        label: {
          contents: "이메일",
        },
        attribute: {
          id: "userEmail",
          type: "email",
          placeholder: "이메일을 입력해주세요",
        },
        checkValue: (value) => {
          switch (true) {
            case isEmpty(value):
              return {
                isValid: !isEmpty(value),
                message: "이메일을 입력해주세요.",
              };

            case !isValidEmail(value):
              return {
                isValid: isValidEmail(value),
                message: "잘못된 이메일 형식입니다.",
              };

            default:
              return {
                isValid: true,
                message: "",
              };
          }
        },
      },
    ],
  },
  {
    index: 2,
    rules: [
      {
        element: "input",
        label: {
          contents: "비밀번호",
        },
        attribute: {
          type: "password",
          id: "userPassword",
          placeholder: "비밀번호를 입력해주세요",
        },
        isVisibility: true,
        checkValue: (value) => {
          const length = 12;

          switch (true) {
            case isEmpty(value):
              return {
                isValid: !isEmpty(value),
                message: "비밀번호를 입력해주세요.",
              };

            case isMinLength(value, length):
              // console.log(isMinLength(value, length));
              return {
                isValid: !isMinLength(value, length),
                message: `비밀번호를 ${length}자 이상 입력해주세요.`,
              };

            default:
              return {
                isValid: true,
                message: "",
              };
          }
        },
      },
    ],
  },
];

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (formValues) => {
    navigate(PATH.ITEMS);
    console.log("제출 값:", formValues);
  };
  return (
    <AuthShell
      logo={AUTHSHELL_CONTENT.logo}
      easeLogin={AUTHSHELL_CONTENT.easeLogin}
      bottom={AUTHSHELL_CONTENT.bottom}
    >
      <SchemaForm fields={FIELDS} onSubmit={handleSubmit} submitText="로그인" />
    </AuthShell>
  );
};

export default LoginPage;
