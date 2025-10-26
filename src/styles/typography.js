import { media } from "@/styles/media";
import styled from "styled-components";

export const Highlight = styled.div`
  color: var(--blue100);
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 2.6rem;

  @media ${media.tablet} {
    margin-bottom: 16px;
    font-size: 1.8rem;
    line-height: 2.6rem;
  }
  @media ${media.mobile} {
    margin-bottom: 8px;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  line-height: 140%;

  @media ${media.tablet} {
    font-size: 3.2rem;
    line-height: 4.2rem;
  }
  @media ${media.mobile} {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.2rem;

  @media ${media.tablet} {
    font-size: 1.8rem;
    line-height: 2.6rem;
  }
  @media ${media.mobile} {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
`;
