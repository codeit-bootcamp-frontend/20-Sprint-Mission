import * as S from "./Input.styles";

const Input = ({
  value,
  label,
  type,
  error,
  placeholder,
  onChange,
  onBlur,
  onKeyDown,
  id,
}) => {
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.StyledInput
        value={value}
        id={id}
        type={type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-invalid={error ? true : false}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
};

export default Input;
