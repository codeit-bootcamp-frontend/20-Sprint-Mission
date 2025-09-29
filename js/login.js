import { clearError, showError } from "./auth.js";
import { isMin8, isRequired, isValidEmail } from "./utils.js";

const form = document.querySelector(".login-container");
const userEmailInput = document.getElementById("userEmail");
const userPasswordInput = document.getElementById("userPassword");
const submitButton = document.getElementById("submit-button");
const visibilityButton = document.getElementsByClassName("btn_visibility");

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

/** input 유효성 검사 */
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

/** input 태그 조건 만족시 버튼 활성화 */
const reevaluate = () => {
  // 이메일 유효성 검사 && 문자열 최소 입력 확인
  const ok =
    isValidEmail(userEmailInput.value) && isMin8(userPasswordInput.value);

  // 두 조건을 만족할시 disabled false
  submitButton.disabled = !ok;

  submitButton.classList.toggle("active-button", ok);
  submitButton.classList.toggle("disabled-button", !ok);
};

/** 비밀번호 보이기/숨기기 핸들러 */
const toggleVisibility = (e) => {
  const btn = e.currentTarget;
  const container = btn.closest(".password-container");
  const input = container?.querySelector(
    'input[type="password"], input[type="text"]'
  );
  const img = btn.querySelector("img");

  // input이 없으면 핸들러 종료
  if (!input) return;

  const toShow = input.type === "password";
  input.type = toShow ? "text" : "password";

  if (img) {
    img.src = toShow
      ? "/imgs/ic_visibility_on.png"
      : "/imgs/ic_visibility_off.png";
    img.alt = toShow ? "비밀번호 보이기 버튼" : "비밀번호 숨기기 버튼";
  }
};

// 이벤트 위임을 통한 이벤트 리스너 추가
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
  reevaluate();
});

// 심화 과제
for (const btn of visibilityButton) {
  btn.addEventListener("click", toggleVisibility);
}
