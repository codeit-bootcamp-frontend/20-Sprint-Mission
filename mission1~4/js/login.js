import DEFAULT_VAILDFIELDS from "../components/initFromValidation/DEFAULT_VAILDFIELDS.js";
import initFormValidation from "../components/initFromValidation/index.js";

// vaildFieldsRender(DEFAULT_VAILDFIELDS);
initFormValidation({
  form: "input-container",
  submitButton: "submit-button",
  fields: DEFAULT_VAILDFIELDS, // 이미 가지고 계신 구조 사용
  sort: true, // sortByIndex 적용
  onSubmit: (values) => {
    // 성공 시 이동
    window.location.href = "../items.html";
  },
});
