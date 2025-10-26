import lgGoogle from "@/assets/ic_google.png";
import lgKakao from "@/assets/ic_kakao.png";
import lgLogo from "@/assets/lgLogo.png";
import AuthShell from "@/components/AuthShell";

const AUTHSHELL_CONTENT = {
  logo: { href: "/", image: lgLogo, imageAlt: "판다마켓 로고" },
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
    text: "이미 회원이신가요?",
    link: { to: "/login", text: "로그인" },
  },
};

const SignupPage = () => {
  return (
    <AuthShell
      logo={AUTHSHELL_CONTENT.logo}
      easeLogin={AUTHSHELL_CONTENT.easeLogin}
      bottom={AUTHSHELL_CONTENT.bottom}
    >
      회원가입 페이지
    </AuthShell>
  );
};

export default SignupPage;
