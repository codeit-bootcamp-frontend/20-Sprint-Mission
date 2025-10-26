import { styled } from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue100);
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 3.2rem;
  color: var(--gray100);

  &:hover {
    background-color: var(--blue200);
  }

  &:disabled {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 3.2rem;
    background: var(--gray400);
    color: var(--gray100);
  }
`;
