import { useCallback, useMemo, useState } from "react";
import InputContainer from "./InputContainer";
import * as S from "./SchemaForm.styles";
import VisbilityInputContainer from "./VisbilityInputContainer";

const getInitialState = (fields) => {
  const initialState = {};
  fields.forEach((fieldGroup) => {
    fieldGroup.rules.forEach((rule) => {
      // ID를 키로 사용하여 초기값 설정
      initialState[rule.attribute.id] = "";
    });
  });
  return initialState;
};

const SchemaForm = ({ fields, onSubmit, className, submitText }) => {
  // 모든 필드의 값
  const [formValues, setFormValues] = useState(() => getInitialState(fields));

  // 입력값 변경 핸들러
  const handleUpdateCentralState = useCallback(
    (name, newValue) => {
      setFormValues((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    },
    [setFormValues]
  );

  const { isFormValid, errorMessages } = useMemo(() => {
    let isValid = true;
    const errors = {};

    fields.forEach((fieldGroup) => {
      fieldGroup.rules.forEach((rule) => {
        const fieldId = rule.attribute.id;
        const value = formValues[fieldId] || "";

        const result = rule.checkValue(value, formValues);

        if (!result.isValid) {
          isValid = false;
          errors[fieldId] = result.message;
        } else {
          errors[fieldId] = "";
        }
      });
    });

    return { isFormValid: isValid, errorMessages: errors };
  }, [formValues, fields]);

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid && onSubmit) {
      onSubmit(formValues); // 유효하면 폼 값 전달
    } else {
      console.error("제출 실패: 폼이 유효하지 않습니다.");
    }
  };

  const renderInputComponent = (rule, containerProps) => {
    const elementKey = rule.attribute.id;

    // rule.isVisibility (비밀번호) 속성 검사
    if (rule.isVisibility) {
      return <VisbilityInputContainer key={elementKey} {...containerProps} />;
    }

    // rule.element 검사
    switch (rule.element) {
      case "input":
        const inputType = rule.attribute.type;

        if (
          inputType === "email" ||
          inputType === "text" ||
          inputType === "password"
        ) {
          // 대부분의 일반 텍스트 기반 입력은 InputContainer가 처리
          return <InputContainer key={elementKey} {...containerProps} />;
        }

        break;

      // 원하는 케이스 추가

      default:
        // 처리할 수 없는 케이스는 렌더링하지 않음
        return null;
    }
  };

  return (
    <S.Form className={className} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <S.Fieldset {...field.attribute} key={field.index}>
          {field.rules.map((rule) => {
            const ContainerProps = {
              rule: rule,
              formValues: formValues,
              errorMessages: errorMessages,
              handleUpdateCentralState: handleUpdateCentralState,
            };

            return renderInputComponent(rule, {
              ...ContainerProps,
            });
          })}
        </S.Fieldset>
      ))}
      <S.SubmitButton type="submit" disabled={!isFormValid}>
        {submitText}
      </S.SubmitButton>
    </S.Form>
  );
};

export default SchemaForm;
