import user from "@/assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { PATH } from "../router";
import * as S from "./Header.styles";

const Header = () => {
  const isLogin = true;

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Nav>
          <Link to={PATH.INDEX} rel="home">
            <S.Logo />
          </Link>
          <S.Ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? { color: "var(--blue100)" } : undefined
                }
              >
                자유 게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to={PATH.ITEMS}
                style={({ isActive }) =>
                  isActive ? { color: "var(--blue100)" } : undefined
                }
              >
                중고마켓
              </NavLink>
            </li>
          </S.Ul>
        </S.Nav>
        {isLogin ? (
          <S.UserImg src={user} alt="유저 이미지" />
        ) : (
          <S.LoginButton as={Link} to={PATH.LOGIN}>
            로그인
          </S.LoginButton>
        )}
      </S.HeaderInner>
    </S.Header>
  );
};

export default Header;
