import * as S from "./Input.styles";

const Input = ({ label, type, error, placeholder, onChange, id }) => {
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.StyledInput
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? true : false}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
};
export default Input;
