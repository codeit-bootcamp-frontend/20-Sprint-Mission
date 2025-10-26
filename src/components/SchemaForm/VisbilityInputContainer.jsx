import icVisibilityOff from "@/assets/ic_visibility_off.png";
import icVisibilityOn from "@/assets/ic_visibility_on.png";
import useDebouncedValue from "@/hooks/useDebouncedValue"; // 💡 디바운싱 훅 import 가정
import useTouchedStatus from "@/hooks/useTouchedStatus";
import { memo, useCallback, useEffect, useState } from "react";
import * as S from "./SchemaForm.styles";

const DEFAULT_VISIBILITY = {
  on: { src: icVisibilityOn, alt: "비밀번호 보이기 버튼" },
  off: { src: icVisibilityOff, alt: "비밀번호 숨기기 버튼" },
};

const VisbilityInputContainer = ({
  rule,
  formValues,
  errorMessages,
  handleUpdateCentralState,
}) => {
  const { handleBlur, isTouched } = useTouchedStatus();
  const [isVisbility, setIsVisbility] = useState(false);

  const fieldId = rule.attribute.id;
  const centralValue = formValues[fieldId] || "";
  const errorMessage = errorMessages[fieldId];

  const [localValue, setLocalValue] = useState(centralValue);

  const debouncedValue = useDebouncedValue(localValue);

  useEffect(() => {
    const name = fieldId;
    handleUpdateCentralState(name, debouncedValue);
  }, [debouncedValue, fieldId, handleUpdateCentralState]);

  useEffect(() => {
    setLocalValue(centralValue);
  }, [centralValue]);

  const handleChange = useCallback((e) => {
    setLocalValue(e.target.value);
  }, []);

  const shouldShowError = !!errorMessage && isTouched;

  return (
    <>
      <S.Label htmlFor={fieldId}>{rule.label.contents}</S.Label>
      <S.PassWordWrap>
        <S.Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={localValue}
          name={rule.attribute.id}
          {...rule.attribute}
          type={isVisbility ? "text" : "password"}
        ></S.Input>
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
            alt={
              isVisbility
                ? DEFAULT_VISIBILITY.on.alt
                : DEFAULT_VISIBILITY.off.alt
            }
          />
        </S.VisbilityButton>
      </S.PassWordWrap>
      {shouldShowError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
};

export default memo(VisbilityInputContainer);
