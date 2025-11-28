import { Link } from "react-router-dom";
import * as S from "./AuthShell.styles";

const AuthShell = ({ logo, children, easeLogin, bottom, externalBottom }) => {
  return (
    <S.Main>
      <S.Section>
        <S.LogoTitle>
          <Link to={logo.href}>
            <img src={logo.image} alt={logo.imageAlt} />
          </Link>
        </S.LogoTitle>
        {children}
        {easeLogin && (
          <S.EaseLoginContainer>
            {easeLogin.title}
            <ul>
              {easeLogin.items.map((item, idx) => (
                <S.EaseLoginItem key={idx}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <img src={item.img} alt={item.alt} />
                  </a>
                </S.EaseLoginItem>
              ))}
            </ul>
          </S.EaseLoginContainer>
        )}
        {bottom && (
          <S.ToBottom>
            {bottom.text}
            <Link to={bottom.link.to}>{bottom.link.text}</Link>
          </S.ToBottom>
        )}
        {externalBottom && (
          <S.ToBottom>
            {externalBottom.text}
            <a href={externalBottom.link.href}>{externalBottom.link.text}</a>
          </S.ToBottom>
        )}
      </S.Section>
    </S.Main>
  );
};

export default AuthShell;
