import smLogo from "@/assets/imgs/smLogo.png";
import typoLogo from "@/assets/imgs/typoLogo.png";
import styled from "styled-components";
import { media } from "../../styles/media";

export const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #dfdfdf;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const HeaderInner = styled.div`
  height: 70px;
  margin: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${media.tablet} {
    margin: 0 24px;
  }

  @media ${media.mobile} {
    margin: 0 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 47px;

  @media ${media.tablet} {
    gap: 35px;
  }

  @media ${media.mobile} {
    gap: 8px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.6rem;

  @media ${media.mobile} {
    gap: 8px;
  }

  color: var(--gray600);
  li {
    height: fit-content;
  }
`;

export const Logo = styled.h1`
  display: block;
  width: 153px;
  height: 51px;
  background-image: url(${smLogo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media ${media.mobile} {
    width: 81px;
    height: 40px;
    background-image: url(${typoLogo});
  }
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const LoginButton = styled.div`
  width: 128px;
`;
