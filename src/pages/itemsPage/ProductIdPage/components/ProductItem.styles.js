import { media } from "@/styles/media";
import styled from "styled-components";

export const ProductItemWrapper = styled.section`
  width: 100%;
  padding: 5px 0 40px;

  display: flex;
  justify-content: center;
  gap: 24px;

  border-bottom: 1px solid var(--gray200);

  @media ${media.tablet} {
    gap: 16px;
  }

  @media ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductItemImgWrapper = styled.div`
  width: 486px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media ${media.tablet} {
    width: 340px;
  }
`;

export const ProductDescriptionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media ${media.mobile} {
    width: 100%;
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray200);
  margin-bottom: 24px;
  color: var(--gray800);
`;

export const ProductTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const ProductPrice = styled.div`
  font-size: 4rem;
  font-weight: 600;

  @media ${media.tablet} {
    font-size: 3.2rem;
  }

  @media ${media.mobile} {
    font-size: 2.4rem;
  }
`;

export const SettingButton = styled.button`
  color: var(--gray400);

  &:hover {
    color: var(--gray600);
  }
`;

export const DescriptionBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.6rem;
  color: var(--gray600);

  @media ${media.tablet} {
    gap: 40px;
  }
`;

export const DescriptionTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 16px;

  @media ${media.tablet} {
    margin-bottom: 8px;
  }
`;

export const ProductDescription = styled.div`
  margin-bottom: 24px;
`;

export const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  color: var(--gray800);
  background-color: var(--gray100);
  border-radius: 999px;
  padding: 5px 12px 5px 16px;
`;

export const SellerInfo = styled.div`
  display: flex;
`;

export const SellerWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  gap: 16px;

  @media ${media.tablet} {
    gap: 8px;
  }

  @media ${media.mobile} {
    gap: 16px;
  }
`;

export const SellerImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const SellerNickname = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const SellerCreatedAt = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--gray400);
`;

export const LikeTagWrapper = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid var(--gray200);
  padding-left: 24px;
  color: var(--gray500);
`;

export const LikeTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--gray200);

  &:hover {
    color: var(--gray600);
  }
`;
