import { BaseButton } from "@/components/common.styles";
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
  gap: 32px;

  @media ${media.tablet} {
    gap: 20px;
  }

  @media ${media.mobile} {
    gap: 8px;
  }
`;

export const Ul = styled.ul`
  padding-left: 15px;
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
  background-image: url("smLogo.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media ${media.mobile} {
    width: 81px;
    height: 40px;
    background-image: url("typoLogo.png");
  }
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const LoginButton = styled(BaseButton)`
  width: 128px;
  height: 48px;
  border-radius: 8px;
`;
