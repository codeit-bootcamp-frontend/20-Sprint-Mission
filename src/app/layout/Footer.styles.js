// src/app/layouts/Footer/Footer.styles.ts
import styled from "styled-components";
import { media } from "../../styles/media";

export const FooterWrap = styled.footer`
  background-color: var(--gray900);
  height: 160px;
  padding: 32px 8px;
  display: flex;
  justify-content: center;
  color: var(--gray200);

  @media ${media.tablet} {
    width: 100%;
    padding: 32px 104px;
  }
  @media ${media.mobile} {
    padding: 32px;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  width: 1120px;
  align-items: center;
  column-gap: 16px;

  @media ${media.tablet} {
    width: 100%;
  }
  @media ${media.mobile} {
    width: 100%;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "nav socials"
      "copy copy";
    row-gap: 16px;
  }
`;

export const Copy = styled.small`
  justify-self: center;
  @media ${media.mobile} {
    grid-area: copy;
    justify-self: start;
    width: 100%;
  }
`;

export const FooterNav = styled.nav`
  justify-self: center;
  @media ${media.mobile} {
    grid-area: nav;
    justify-self: start;
    width: 100%;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 12px;
  font-weight: 400;

  @media ${media.mobile} {
    gap: 30px;
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  gap: 12px;

  @media ${media.mobile} {
    grid-area: socials;
    justify-self: end;
  }

  li img {
    display: block;
    max-width: 100%;
  }
`;
