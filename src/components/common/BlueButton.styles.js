import resolveResponsiveValue from "@/lib/resolveResponsiveValue";
import styled, { css } from "styled-components";

const BUTTON_SIZE = {
  sm: css`
    height: 42px;
  `,
  md: css`
    height: 48px;
  `,
  lg: css`
    height: 56px;
  `,
};

const FONT_SIZE = {
  xsm: css`
    font-size: 1.4rem;
  `,
  sm: css`
    font-size: 1.6rem;
  `,
  md: css`
    font-size: 1.8rem;
  `,
  lg: css`
    font-size: 2rem;
  `,
};

const RADIUS = {
  sm: css`
    border-radius: 8px;
  `,
  max: css`
    border-radius: 999px;
  `,
};

export const BlueButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  background-color: var(--blue100);
  color: var(--gray100);

  ${({ size }) => resolveResponsiveValue(BUTTON_SIZE, size)}
  ${({ fontSize }) => resolveResponsiveValue(FONT_SIZE, fontSize)}
  ${({ radius }) => RADIUS[radius]}

  &:hover {
    background-color: var(--blue200);
  }

  &:disabled {
    background-color: var(--gray400);
  }
`;
