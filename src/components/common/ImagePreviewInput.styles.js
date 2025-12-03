import { media } from "@/styles/media";
import styled from "styled-components";

export const ImgPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ImgContainer = styled.div`
  display: flex;
  gap: 24px;

  @media ${media.tablet} {
    gap: 10px;
  }
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgInputLabel = styled.label`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 282px;
  height: 282px;
  border-radius: 16px;
  background-color: var(--gray100);
  overflow: hidden;
  color: var(--gray400);

  @media ${media.tablet} {
    width: 168px;
    height: 168px;
  }
`;

export const ItemImgContainer = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 16px;
  overflow: hidden;

  @media ${media.tablet} {
    width: 168px;
    height: 168px;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const SvgWrapper = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
`;

export const ErrorText = styled.span`
  margin-top: 8px;
  margin-left: 16px;
  color: var(--error-red);
  font-size: 1.6rem;
`;
