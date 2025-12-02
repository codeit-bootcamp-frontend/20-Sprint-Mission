import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 24px;
  border-radius: 12px;
  background-color: var(--gray100);

  font-size: 1.6rem;
  font-weight: 400;

  &[aria-invalid="true"] {
    border: 1px solid var(--error-red);
  }
`;

export const ErrorText = styled.span`
  margin-top: 8px;
  margin-left: 16px;
  color: var(--error-red);
  font-size: 1.6rem;
`;
