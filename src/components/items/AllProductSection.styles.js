import icArrowDown from "@/assets/ic_arrow_down.png";
import icSort from "@/assets/ic_sort.png";
import { media } from "@/styles/media";
import styled, { css } from "styled-components";
import { BaseButton } from "../common.styles";

export const AllProductContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
  margin-bottom: 43px;

  @media ${media.tablet} {
    width: 696px;
  }

  @media ${media.mobile} {
    width: 344px;
    row-gap: 32px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;

  @media ${media.mobile} {
    width: 344px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
`;

export const SubTitle = styled.h2`
  color: var(--gray900);
  flex: 1;
  @media ${media.mobile} {
    order: 0;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
  }
  @media ${media.mobile} {
    order: 3;
  }
`;

export const SearchInput = styled.input`
  height: 42px;
  padding: 9px 16px 9px 44px;
  border-radius: 8px;
  background-color: var(--gray100);
  font-size: 1.6rem;
  color: var(--gray800);

  @media ${media.tablet} {
    width: 242px;
  }

  @media ${media.mobile} {
    width: 288px;
  }
`;

export const AddProductButton = styled(BaseButton)`
  border-radius: 8px;
  padding: 8px 23px;
  font-size: 1.6rem;
  line-height: 2.6rem;

  @media ${media.mobile} {
    width: 133px;
    order: 2;
  }
`;

export const SortButton = styled.button`
  position: relative;
  width: 130px;
  height: 42px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 9px 20px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  text-align: start;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  img {
    position: absolute;
    right: 20px;
    top: 9px;
    width: 24px;
    height: 24px;
    content: url(${icArrowDown}); /* 기본 이미지 */
  }

  @media ${media.mobile} {
    width: 42px;
    padding: 0;
    justify-content: center;

    /* 텍스트 숨기기 */
    font-size: 0;
    line-height: 0;
    color: transparent;

    order: 4;

    /* 아이콘 변경 */
    img {
      position: static;
      width: 20px;
      height: 20px;
      content: url(${icSort}); /* 모바일용 아이콘 경로 */
    }
  }
`;

export const PageButtonContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const PageButton = styled.button`
  border: solid 1px #e5e7eb;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6b7280;
  font-weight: 600;
  font-size: 1.6rem;

  img {
    width: 16px;
    height: 16px;
  }

  ${({ $current }) =>
    $current &&
    css`
      color: #f9fafb;
      background-color: #2f80ed;
    `}
`;
