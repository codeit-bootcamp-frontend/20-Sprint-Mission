import styled from "styled-components";
import { BaseButton } from "../../components/common";
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

export const Logo = styled.h1`
  display: block;
  width: 153px;
  height: 51px;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const LoginButton = styled(BaseButton)`
  width: 128px;
  height: 48px;
  border-radius: 8px;
`;
