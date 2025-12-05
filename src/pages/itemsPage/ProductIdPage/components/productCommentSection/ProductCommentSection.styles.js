import BlueButton from "@/components/common/BlueButton";
import { media } from "@/styles/media";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;

  img {
    width: 196px;
    height: 196px;
  }

  @media ${media.tablet} {
    img {
      width: 140px;
      height: 140px;
    }
  }
`;

export const EmptyText = styled.div`
  color: var(--gray400);
  font-weight: 400;
`;

export const CommentItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 64px;

  @media ${media.tablet} {
    margin-bottom: 47px;
  }

  @media ${media.mobile} {
    margin-bottom: 40px;
  }
`;

export const ReturnButton = styled(BlueButton)`
  width: 240px;

  svg {
    margin-top: 2px;
    margin-left: 8px;
  }
`;
