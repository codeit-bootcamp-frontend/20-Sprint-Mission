import { clearError, showError } from "./auth.js";
import { isMin8, isRequired, isValidEmail } from "./utils.js";

const form = document.querySelector(".login-container");
const userEmailInput = document.getElementById("userEmail");
const userPasswordInput = document.getElementById("userPassword");

// 순서대로 검사 처음 실패한 메시지 노출
const FIELDS = [
  {
    el: userEmailInput,
    rules: [
      { test: isRequired, message: "이메일을 입력해주세요." },
      { test: isValidEmail, message: "잘못된 이메일 형식입니다." },
    ],
  },
  {
    el: userPasswordInput,
    rules: [
      { test: isRequired, message: "비밀번호를 입력해주세요." },
      { test: isMin8, message: "비밀번호를 8자 이상 입력해주세요." },
    ],
  },
];

const validateField = (fieldEl, rules) => {
  const value = fieldEl.value;
  for (const { test, message } of rules) {
    if (!test(value)) {
      showError(fieldEl, message);
      return;
    }
  }
  clearError(fieldEl);
};

// 이벤트 위임
form.addEventListener("focusout", (e) => {
  const field = FIELDS.find((f) => f.el === e.target);
  if (!field) return;
  validateField(field.el, field.rules);
});

// 입력중 조건 만족시 클리어
form.addEventListener("input", (e) => {
  const field = FIELDS.find((f) => f.el === e.target);
  if (!field) return;
  validateField(field.el, field.rules);
});
