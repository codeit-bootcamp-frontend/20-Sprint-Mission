import {
  clearError,
  showError,
  toggleVisibility,
  validateField,
} from "./auth.js";
import { isMin8, isRequired, isSame, isValidEmail } from "./utils.js";

const form = document.querySelector(".login-container");
const userEmailInput = document.getElementById("userEmail");
const userNickNameInput = document.getElementById("userNickName");
const userPasswordInput = document.getElementById("userPassword");
const userPasswordCheckInput = document.getElementById("userPasswordCheck");
const submitButton = document.getElementById("submit-button");
const visibilityButton = document.getElementsByClassName("btn_visibility");

// 비밀번호 일치 확인
const validatePasswordConfirm = () => {
  const pwd = userPasswordInput.value;
  const confirm = userPasswordCheckInput.value.trim();

  if (!confirm) {
    return false;
  }
  if (!isSame(pwd, confirm)) {
    showError(userPasswordCheckInput, "비밀번호가 일치하지 않습니다.");
    return false;
  }
  clearError(userPasswordCheckInput, true);
  return true;
};

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
    el: userNickNameInput,
    rules: [{ test: isRequired, message: "닉네임을 입력해주세요." }],
  },
  {
    el: userPasswordInput,
    rules: [
      { test: isRequired, message: "비밀번호를 입력해주세요." },
      { test: isMin8, message: "비밀번호를 8자 이상 입력해주세요." },
    ],
  },
  {
    el: userPasswordCheckInput,
    rules: [
      { test: isRequired, message: "비밀번호 확인을 입력해주세요." },
      {
        test: validatePasswordConfirm,
        message: "비밀번호가 일치하지 않습니다.",
      },
    ],
  },
];

const reevaluate = () => {
  // 이메일 유효성 검사 && 문자열 최소 입력 확인
  const ok =
    isValidEmail(userEmailInput.value) &&
    isMin8(userPasswordInput.value) &&
    isRequired(userNickNameInput.value) &&
    validatePasswordConfirm();

  // 위의 조건을 만족할시 disabled false
  submitButton.disabled = !ok;

  submitButton.classList.toggle("active-button", ok);
  submitButton.classList.toggle("disabled-button", !ok);
};

// 이벤트 위임을 통한 이벤트 리스너 추가
form.addEventListener("focusout", (e) => {
  const field = FIELDS.find((f) => f.el === e.target);
  if (!field) return;
  validateField(field.el, field.rules, true);
});

// 입력중 조건 만족시 클리어
form.addEventListener("input", (e) => {
  const field = FIELDS.find((f) => f.el === e.target);
  if (!field) return;
  validateField(field.el, field.rules, true);
  validatePasswordConfirm();
  reevaluate();
});

// 심화 과제
for (const btn of visibilityButton) {
  btn.addEventListener("click", toggleVisibility);
}
