import * as S from "./Textarea.styles";

const Textarea = ({ label, error, placeholder, onChange, id }) => {
  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.StyledTextarea
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? true : false}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
};

export default Textarea;
