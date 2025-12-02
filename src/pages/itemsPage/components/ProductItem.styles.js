import { media } from "@/styles/media";
import styled, { css } from "styled-components";

const CONTENT_SIZE = {
  md: css`
    width: 211px;
    height: 211px;

    @media ${media.mobile} {
      width: 168px;
      height: 168px;
    }
  `,
  lg: css`
    width: 282px;
    height: 282px;

    @media ${media.tablet} {
      width: 343px;
      height: 343px;
      margin-bottom: 10px;
    }
  `,
};

export const Container = styled.div`
  color: var(--gray800);
`;

export const ProductImgBox = styled.div`
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 16px;

  ${({ size }) => CONTENT_SIZE[size]}
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 비율 유지하면서 영역 채우기 */
  object-position: center; /* 가운데 정렬 */
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProductTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const ProductPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
`;

export const ProductFavoriteCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  color: var(--gray600);

  img {
    width: 16px;
    height: 16px;
  }
`;
