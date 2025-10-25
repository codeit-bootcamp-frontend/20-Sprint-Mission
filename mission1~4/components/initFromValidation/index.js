import { sortByIndex } from "../../js/utils.js";
import { vaildFieldsRender } from "./vaildFieldsRender.js";
import { clearError, showError, validateField } from "./validationUtils.js";

const initFormValidation = ({
  form, // 문자열('#id') 또는 실제 form 엘리먼트
  submitButton, // 문자열('#id') 또는 버튼 엘리먼트
  fields, // DEFAULT_VAILDFIELDS 형태( rules 내부에 { attribute: { id }, checkValue } )
  sort = true, // 인덱스 기준 정렬 여부
  onSubmit, // (values, event) => void
}) => {
  vaildFieldsRender(fields, form);
  //엘리먼트 해석
  const formEl = document.getElementById(form);
  const submitBtnEl = document.getElementById(submitButton);

  if (!formEl || !submitBtnEl) {
    console.error(
      "initFormValidation: form 또는 submitButton을 찾을 수 없습니다."
    );
    return () => {};
  }

  // 필드 정렬(필요시)
  const FIELDS = sort ? sortByIndex(fields) : fields;

  // id → rule 매핑(탐색 비용 절감)
  const ruleMap = new Map();
  FIELDS.forEach((f) => {
    (f.rules || []).forEach((r) => {
      if (r?.attribute?.id) ruleMap.set(r.attribute.id, r);
    });
  });

  // 현재 폼 값 가져오기
  const getValues = () => Object.fromEntries(new FormData(formEl).entries());

  // 전체 유효성 확인
  const isAllValid = (vals) =>
    FIELDS.every((field) =>
      (field.rules || []).every((rule) => {
        if (typeof rule.checkValue === "function") {
          const result = rule.checkValue(vals[rule.attribute.id]);
          return !!result?.isValid;
        }
        return true;
      })
    );

  // 제출 버튼 enable/disable
  const reevaluate = (ok) => {
    submitBtnEl.disabled = !ok;
  };

  // 개별 필드 검증 핸들러 (focusout 위임)
  const handleFocusOut = (e) => {
    const targetId = e.target?.id;
    if (!targetId) return;

    const rule = ruleMap.get(targetId);
    if (!rule) return;

    const fieldEl = document.getElementById(rule.attribute.id);
    if (!fieldEl) return;

    // 단일 필드 검증
    const ok = validateField(rule); // 기존 함수 사용
    if (!ok) {
      const res = rule.checkValue(fieldEl.value);
      showError(fieldEl, res?.message || "유효하지 않은 값입니다.");
    } else {
      clearError(fieldEl);
    }

    // 전체 재평가
    reevaluate(isAllValid(getValues()));
  };

  // 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = getValues();

    if (!isAllValid(values)) {
      // 필요 시 폼 레벨 피드백 추가 가능
      return;
    }

    if (typeof onSubmit === "function") {
      onSubmit(values, e);
    }
  };

  // 리스너 부착
  formEl.addEventListener("focusout", handleFocusOut);
  formEl.addEventListener("submit", handleSubmit);

  // 초기 상태 반영(처음엔 비활성)
  reevaluate(false);

  // 해제 함수 반환(필요시 호출)
  return () => {
    formEl.removeEventListener("focusout", handleFocusOut);
    formEl.removeEventListener("submit", handleSubmit);
  };
};

export default initFormValidation;
