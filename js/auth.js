/** 에러 보이기 */
const showError = (input, message) => {
  input.classList.add("is-invalid");
  const next = input.nextElementSibling;
  if (next && next.classList.contains("is-error-message")) {
    next.textContent = message;
  } else {
    input.insertAdjacentHTML(
      "afterend",
      `<div class="is-error-message">${message}</div>`
    );
  }
};

/** 에러 클리어 */
const clearError = (input) => {
  input.classList.remove("is-invalid");
  const next = input.nextElementSibling;
  if (next && next.classList.contains("is-error-message")) next.remove();
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

export { clearError, showError, toggleVisibility, validateField };
