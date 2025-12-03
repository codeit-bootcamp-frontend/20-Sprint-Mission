import * as S from "./Textarea.styles";

const Textarea = ({
  value,
  label,
  error,
  placeholder,
  onChange,
  id,
  className,
}) => {
  return (
    <S.Wrapper className={className}>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.StyledTextarea
        id={id}
        value={value}
        placeholder={placeholder}
        className={className}
        aria-invalid={error ? true : false}
        onChange={onChange}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
};

export default Textarea;
