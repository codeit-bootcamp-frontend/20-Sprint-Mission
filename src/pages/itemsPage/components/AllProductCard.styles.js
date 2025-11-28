import { media } from "@/styles/media";
import styled from "styled-components";

export const Container = styled.div`
  width: 211px;
  color: var(--gray800);

  @media ${media.mobile} {
    width: 168px;
  }
`;

export const ProductImgBox = styled.div`
  width: 211px;
  height: 211px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;

  @media ${media.mobile} {
    width: 168px;
    height: 168px;
  }
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
