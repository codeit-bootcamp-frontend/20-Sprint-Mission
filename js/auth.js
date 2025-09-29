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

const clearError = (input) => {
  input.classList.remove("is-invalid");
  const next = input.nextElementSibling;
  if (next && next.classList.contains("is-error-message")) next.remove();
};

export { clearError, showError };
