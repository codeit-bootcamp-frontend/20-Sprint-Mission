import user from "@/assets/user.png";
import { Link, useLocation } from "react-router-dom";

import { PATH } from "../router";
import * as S from "./Header.styles";

const HEADER_DATA = {
  logo: {
    href: PATH.INDEX,
    ariaLabel: "판다마켓 홈",
  },
  navLinks: [
    { name: "자유 게시판", href: "/" },
    { name: "중고마켓", href: PATH.ITEMS },
  ],
  userImg: {
    imageSrc: user,
    imageAlt: "유저 이미지",
  },
  loginButton: {
    text: "로그인",
    href: PATH.LOGIN,
  },
};

const Header = () => {
  const location = useLocation();
  const { logo, userImg, navLinks, loginButton } = HEADER_DATA;
  const isLogin = true;

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Nav>
          <Link to={logo.href} rel="home">
            <S.Logo></S.Logo>
          </Link>
          <S.Ul>
            {navLinks.map((item) => (
              <li
                style={
                  location.pathname === item.href
                    ? { color: "var(--blue100)" }
                    : {}
                }
                key={item.name}
              >
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </S.Ul>
        </S.Nav>
        {isLogin ? (
          <S.UserImg
            src={userImg.imageSrc}
            alt={userImg.imageAlt}
            tabIndex={0}
          />
        ) : (
          <S.LoginButton as={Link} to={loginButton.href}>
            {loginButton.text}
          </S.LoginButton>
        )}
      </S.HeaderInner>
    </S.Header>
  );
};
export default Header;
