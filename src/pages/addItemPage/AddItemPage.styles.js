import { media } from "@/styles/media";
import styled from "styled-components";

export const AddItemLayout = styled.main`
  width: 1200px;
  margin: 24px auto 70px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${media.tablet} {
    width: auto;
    margin: 16px 24px 70px;
  }

  @media ${media.mobile} {
    margin: 24px 15px 70px;
  }
`;
