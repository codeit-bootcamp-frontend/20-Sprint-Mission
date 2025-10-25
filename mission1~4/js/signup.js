import { isRequired, sameAs } from "../../js/utils.js";
import DEFAULT_VAILDFIELDS, {
  FIELDS_CLASSNAME,
} from "../components/initFromValidation/DEFAULT_VAILDFIELDS.js";
import initFormValidation from "../components/initFromValidation/index.js";
/**
 * 기존 DEFAULT_VAILDFIELDS를 복사하고 필요한 항목만 덮어쓰기
 */
const NEW_VAILDFIELDS = DEFAULT_VAILDFIELDS.map((field) => {
  switch (field.rules[0].attribute?.id) {
    // 이메일: index 1로 변경
    case "userEmail":
      return { ...field, index: 1 };

    // 비밀번호: index 3으로 변경
    case "userPassword":
      return { ...field, index: 3 };

    // 제출 버튼: index 5로 변경 + 텍스트 “회원가입”
    case "submit-button":
      return {
        ...field,
        index: 5,
        rules: field.rules.map((r) => ({
          ...r,
          innerContents: "회원가입",
        })),
      };

    // 기본은 그대로 유지
    default:
      return field;
  }
});

// 닉네임 필드 추가
NEW_VAILDFIELDS.splice(1, 0, {
  index: 2,
  rules: [
    {
      element: "input",
      lable: { innerContents: "닉네임" },
      attribute: {
        id: "userNickName",
        type: "text",
        placeholder: "닉네임을 입력해주세요",
        class: FIELDS_CLASSNAME.login_input,
      },
      checkValue: (value) => {
        if (isRequired(value))
          return { isValid: false, message: "닉네임을 입력해주세요." };
        return { isValid: true, message: "" };
      },
    },
  ],
});

// 비밀번호 확인 필드 추가
NEW_VAILDFIELDS.splice(3, 0, {
  index: 4,
  class: "dasdasdas",
  rules: [
    {
      element: "input",
      lable: { innerContents: "비밀번호 확인" },
      isVisibility: true,
      attribute: {
        id: "userPasswordCheck",
        type: "password",
        placeholder: "비밀번호를 다시 입력해주세요",
        class: FIELDS_CLASSNAME.login_input,
      },
      checkValue: (value) => {
        const password = document.getElementById("userPassword")?.value || "";
        if (sameAs(value, password)) return { isValid: true, message: "" };
        return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
      },
    },
  ],
});

// vaildFieldsRender(DEFAULT_VAILDFIELDS);
initFormValidation({
  form: "input-container",
  submitButton: "submit-button",
  fields: NEW_VAILDFIELDS,
  sort: true, // sortByIndex 적용
  onSubmit: (values) => {
    // 성공 시 이동
    window.location.href = "../login.html";
  },
});

// const FIELDS = [
//   {
//     id: "userEmail",
//     rules: [
//       { test: isRequired, message: "이메일을 입력해주세요." },
//       { test: isValidEmail, message: "잘못된 이메일 형식입니다." },
//     ],
//   },
//   {
//     id: "userNickName",
//     rules: [{ test: isRequired, message: "닉네임을 입력해주세요." }],
//   },
//   {
//     id: "userPassword",
//     rules: [
//       { test: isRequired, message: "비밀번호를 입력해주세요." },
//       { test: isMin8, message: "비밀번호를 8자 이상 입력해주세요." },
//     ],
//   },
//   {
//     id: "userPasswordCheck",
//     rules: [
//       {
//         test: sameAs,
//         message: "비밀번호가 일치하지 않습니다.",
//         parameters: { otherId: "userPassword" },
//       },
//     ],
//   },
// ];

// const reevaluate = () => {
//   // 이메일 유효성 검사 && 문자열 최소 입력 확인
//   const ok =
//     isValidEmail(userEmailInput.value) &&
//     isMin8(userPasswordInput.value) &&
//     isRequired(userNickNameInput.value) &&
//     isSame(userPasswordInput.value, userPasswordCheckInput.value);

//   // 위의 조건을 만족할시 disabled false
//   submitButton.disabled = !ok;

//   submitButton.classList.toggle("active-button", ok);
//   submitButton.classList.toggle("disabled-button", !ok);
// };

// // 이벤트 위임을 통한 이벤트 리스너 추가
// form.addEventListener("focusout", (e) => {
//   const field = FIELDS.find((f) => document.getElementById(f.id) === e.target);
//   if (!field) return;
//   validateField(field.id, field.rules, true);
// });

// const DEPENDS_ON = {
//   userPassword: "userPasswordCheck", // 비밀번호가 바뀌면 확인 필드를 재검증
//   userCard: "userCardCheck",
// };

// // 입력중 조건 만족시 클리어
// form.addEventListener("input", (e) => {
//   const field = FIELDS.find((f) => document.getElementById(f.id) === e.target);

//   if (!field) return;
//   validateField(field.id, field.rules, true);

//   const dependents = DEPENDS_ON[field.id] || [];
//   dependents.forEach((depId) => validateField(depId, field.rules, true));
//   reevaluate();
// });

// // 심화 과제
// for (const btn of visibilityButton) {
//   btn.addEventListener("click", toggleVisibility);
// }
