import { MARKET_PATHS, PATH } from "@/app/router";
import user from "@/assets/imgs/user.png";
import BlueButton from "@/components/common/BlueButton";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as S from "./Header.styles";

const Header = () => {
  const location = useLocation();
  const isLogin = true;

  const isMarketActive = MARKET_PATHS.includes(location.pathname);

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
                  isMarketActive || isActive
                    ? { color: "var(--blue100)" }
                    : undefined
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
          <>
            <S.LoginButton as={Link} to={PATH.LOGIN}>
              <BlueButton fontSize="sm">로그인</BlueButton>
            </S.LoginButton>
          </>
        )}
      </S.HeaderInner>
    </S.Header>
  );
};

export default Header;
