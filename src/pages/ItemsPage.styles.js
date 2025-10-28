import { media } from "@/styles/media";
import styled from "styled-components";

export const Main = styled.main`
  padding-top: 24px;
  /* width: 1200px; */

  @media ${media.tablet} {
    /* width: 696px; */
    padding: 24px;
  }
  @media ${media.mobile} {
    /* width: 696px; */
    padding: 17px 16px 0;
  }
`;

export const BestSection = styled.section`
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
    /* width: 696px; */
    gap: 10px;
  }
  @media ${media.mobile} {
  }
`;
