import { Link } from "react-router-dom";
import smLogo from "../../assets/smLogo.png";

import { PATH } from "../router";
import * as S from "./Header.styles";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo>
          <Link to={PATH.INDEX} rel="home" aria-label="판다마켓 홈">
            <img src={smLogo} alt="판다마켓 로고" />
          </Link>
        </S.Logo>
        <S.LoginButton as={Link} to={PATH.LOGIN}>
          로그인
        </S.LoginButton>
      </S.HeaderInner>
    </S.Header>
  );
};

export default Header;
