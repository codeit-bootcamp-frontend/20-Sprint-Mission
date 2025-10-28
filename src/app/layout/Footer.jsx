import { Link } from "react-router-dom";
import icFacebook from "../../assets/ic_facebook.png";
import icInsta from "../../assets/ic_instagram.png";
import icTwitter from "../../assets/ic_twitter.png";
import icYoutube from "../../assets/ic_youtube.png";
import { PATH } from "../router";
import * as S from "./Footer.styles";

export default function Footer() {
  return (
    <S.FooterWrap>
      <S.FooterContainer>
        <S.Copy>© codeit · 2024</S.Copy>
        <S.FooterNav aria-label="푸터 내비게이션">
          <S.NavLinks>
            <li>
              <Link to={PATH.PRIVACY}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={PATH.FAQ}>FAQ</Link>
            </li>
          </S.NavLinks>
        </S.FooterNav>
        <S.SocialLinks>
          <li>
            <a
              href="https://www.facebook.com/?locale=ko_KR"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icFacebook} alt="페이스북 바로가기" />
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <img src={icTwitter} alt="트위터 바로가기" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={icYoutube} alt="유튜브 바로가기" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={icInsta} alt="인스타그램 바로가기" />
            </a>
          </li>
        </S.SocialLinks>
      </S.FooterContainer>
    </S.FooterWrap>
  );
}
