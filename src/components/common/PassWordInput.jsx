import icVisibilityOff from "@/assets/imgs/ic_visibility_off.png";
import icVisibilityOn from "@/assets/imgs/ic_visibility_on.png";
import { useState } from "react";
import * as S from "./PassWordInput.styles";

const DEFAULT_VISIBILITY = {
  on: { src: icVisibilityOn, alt: "비밀번호 보이기 버튼" },
  off: { src: icVisibilityOff, alt: "비밀번호 숨기기 버튼" },
};

const PassWordInput = ({
  value,
  label,
  error,
  placeholder,
  onChange,
  onBlur,
  onKeyDown,
  id,
}) => {
  const [isVisbility, setIsVisbility] = useState(false);

  return (
    <S.Wrapper>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.PassWordWrap>
        <S.StyledInput
          value={value}
          id={id}
          type={isVisbility ? "text" : "password"}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-invalid={error ? true : false}
          autoComplete="current-password"
        />
        <S.VisbilityButton
          onClick={() => setIsVisbility(!isVisbility)}
          type="button"
        >
          <img
            src={
              isVisbility
                ? DEFAULT_VISIBILITY.on.src
                : DEFAULT_VISIBILITY.off.src
            }
            alt={isVisbility ? "비밀번호 보이기 버튼" : "비밀번호 숨기기 버튼"}
          />
        </S.VisbilityButton>
      </S.PassWordWrap>
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
};

export default PassWordInput;
