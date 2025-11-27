import { media } from "@/styles/media";
import styled, { css } from "styled-components";

export const Section = styled.section`
  background-color: #cfe5ff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 540px;
  overflow: hidden;

  .imgWraper {
    width: 746px;
    height: 340px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${media.tablet} {
    flex-direction: column;
    align-items: center;
    padding-top: 84px;
    height: auto;

    .imgWraper {
      width: 744px;
      height: 340px;
    }
  }

  @media ${media.mobile} {
    .imgWraper {
      width: 448px;
      height: 204px;
    }
  }

  /* 하단 전용 */
  ${({ $variant }) =>
    $variant === "bottom" &&
    css`
      .imgWraper {
        width: 746px;
        height: 397px;
      }

      @media ${media.tablet} {
        padding-top: 201px;

        .imgWraper {
          width: 744px;
          height: 397px;
        }
      }

      @media ${media.mobile} {
        padding-top: 121px;

        .imgWraper {
          width: 375px;
          height: 198px;
        }
      }
    `}
`;
