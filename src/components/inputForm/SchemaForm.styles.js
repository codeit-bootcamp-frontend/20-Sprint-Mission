import styled from "styled-components";
import { BaseButton } from "../common.styles";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Fieldset = styled.fieldset``;

export const Label = styled.label`
  display: inline-block;
  color: var(--gray800);
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 16px 48px 16px 24px;
  border-radius: 10px;
  background-color: var(--gray100);
  font-size: 1.6rem;
  color: var(--gray800);
`;

export const ErrorMessage = styled.div`
  margin-top: 8px;
  margin-left: 16px;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--error-red);
`;

export const PassWordWrap = styled.div`
  position: relative;
`;

export const VisbilityButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  width: 2.4rem;
  height: 2.4rem;
`;

export const SubmitButton = styled(BaseButton)`
  height: 56px;
  font-size: 2rem;
  border-radius: 40px;
`;

export const StyledForm = Form;
export const StyledFieldset = Fieldset;
export const StyledLabel = Label;
export const StyledInput = Input;
export const StyledErrorMessage = ErrorMessage;
export const StyledPassWordWrap = PassWordWrap;
export const StyledVisbilityButton = VisbilityButton;
export const StyledSubmitButton = SubmitButton;
