import useDebouncedValue from "@/hooks/useDebouncedValue"; // 💡 새로 정의한 훅 import 가정
import useTouchedStatus from "@/hooks/useTouchedStatus";
import { memo, useEffect, useState } from "react";
import * as S from "./SchemaForm.styles";

const InputContainer = ({
  rule,
  formValues,
  errorMessages,
  handleUpdateCentralState,
}) => {
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

  const { handleBlur, isTouched } = useTouchedStatus();
  const shouldShowError = !!errorMessage && isTouched;

  const handleChange = (e) => {
    const target = e.target;
    const newValue = target.type === "checkbox" ? target.checked : target.value;

    setLocalValue(newValue);
  };

  return (
    <>
      <S.Label {...rule.attribute} htmlFor={fieldId}>
        {rule.label.contents}
      </S.Label>
      <S.Input
        value={localValue}
        onChange={handleChange}
        onBlur={handleBlur}
        name={fieldId}
        {...rule.attribute}
      ></S.Input>
      {shouldShowError && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
};
export default memo(InputContainer);
