import { media } from "@/styles/media";
import { Description, Highlight, SubTitle } from "@/styles/typography";
import styled, { css } from "styled-components";

export const Section = styled.section`
  margin: 138px auto;
  width: 988px;
  height: 444px;
  background-color: #fcfcfc;
  display: flex;
  align-items: center;
  border-radius: 16px;
  gap: 64px;

  .imgWraper {
    width: 579px;
    height: 444px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${media.tablet} {
    margin: 0 auto;
    width: 696px;
    height: 708px;
    background-color: #ffffff;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;

    .imgWraper {
      width: 696px;
      height: 524px;
    }
  }

  @media ${media.mobile} {
    width: 344px;
    height: 413px;

    .imgWraper {
      flex: 1;
      width: 344px;
      height: 259px;
    }
  }

  /* 텍스트 먼저 */
  ${({ $textFirst }) =>
    $textFirst &&
    css`
      flex-direction: row-reverse;
      text-align: end;

      @media ${media.tablet} {
        align-items: flex-end;
      }

      @media ${media.mobile} {
      }
    `}
`;

export const TextWraper = styled.div``;

export const FeatureHighlight = styled(Highlight)`
  margin-bottom: 12px;

  @media ${media.tablet} {
    margin-bottom: 16px;
  }

  @media ${media.mobile} {
    margin-bottom: 8px;
    font-size: 1.6rem;
  }
`;

export const FeatureSubTitle = styled(SubTitle)`
  word-break: keep-all;
  margin-bottom: 24px;
  width: 293px;

  @media ${media.tablet} {
    width: 100%;
  }

  @media ${media.mobile} {
    margin-bottom: 16px;
  }
`;

export const FeatureDescription = styled(Description)`
  word-break: keep-all;
`;
