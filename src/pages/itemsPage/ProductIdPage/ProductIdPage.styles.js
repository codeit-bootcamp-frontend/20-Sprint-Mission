import { media } from "@/styles/media";
import styled from "styled-components";

export const Main = styled.main`
  width: 1200px;
  margin: 24px auto 70px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${media.tablet} {
    width: auto;
    padding: 24px;
    padding-bottom: 70px;
    gap: 24px;
  }

  @media ${media.mobile} {
    padding: 16px;
    padding-bottom: 70px;
  }
`;
