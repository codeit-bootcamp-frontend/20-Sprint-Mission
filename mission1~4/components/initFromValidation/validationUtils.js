import { FIELDS_CLASSNAME } from "./DEFAULT_VAILDFIELDS.js";

/** 에러 보이기 */
const showError = (el, message) => {
  const parent = el.closest(`.${FIELDS_CLASSNAME.input_container}`);
  el.classList.remove(FIELDS_CLASSNAME.is_valid);
  el.classList.add(FIELDS_CLASSNAME.is_invalid);
  parent.style.marginBottom = "8px";
  const next = parent.nextElementSibling;
  if (next && next.classList.contains(FIELDS_CLASSNAME.is_error_message)) {
    next.textContent = message;
  } else {
    parent.insertAdjacentHTML(
      "afterend",
      `<div class=${FIELDS_CLASSNAME.is_error_message}>${message}</div>`
    );
  }
};

/** 에러 클리어 */
const clearError = (el, type = false) => {
  console.log("clearError === ", el);
  const parent = el.closest(`.${FIELDS_CLASSNAME.input_container}`);
  el.classList.remove(FIELDS_CLASSNAME.is_invalid);
  parent.style.marginBottom = "";
  const next = parent.nextElementSibling;
  if (next && next.classList.contains(FIELDS_CLASSNAME.is_error_message))
    next.remove();
  if (type) el.classList.add(FIELDS_CLASSNAME.is_valid);
};

/** input 유효성 검사 */
const validateField = ({ attribute, type, ...rule }) => {
  const fieldEl = document.getElementById(attribute.id);
  const value = fieldEl.value;

  if (!rule.checkValue(value).isValid) return false;

  return true;
};

export { clearError, showError, validateField };
