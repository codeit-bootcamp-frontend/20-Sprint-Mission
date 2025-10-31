import { media } from "@/styles/media";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
  padding-bottom: 58px;

  @media ${media.mobile} {
    padding: 17px 16px;
  }
`;

export const BestSection = styled.section`
  margin: 0 auto;
  width: fit-content;
`;

export const AllSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: fit-content;
`;

export const SubTitle = styled.h2`
  color: var(--gray900);
  margin-bottom: 16px;
`;

export const BestProductContainer = styled.div`
  display: flex;
  gap: 24px;

  @media ${media.tablet} {
    gap: 10px;
  }
`;
