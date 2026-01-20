const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('.loginButton');
const toggleButtons = document.querySelectorAll('.togglePassword');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const touched = {
  email: false,
  password: false,
};

const setError = (inputEl, message, shouldShow) => {
  const container = inputEl.closest('.inputContainer');
  const msgEl = container?.querySelector('.errorMessage');

  if (message && shouldShow) {
    container?.classList.add('error');
    inputEl.classList.add('error');
    if (msgEl) msgEl.textContent = message;
    return;
  }

  container?.classList.remove('error');
  inputEl.classList.remove('error');
  if (msgEl) msgEl.textContent = '';
};

const validateEmail = (showErrors = false) => {
  const value = emailInput.value.trim();
  let message = '';

  if (!value) {
    message = '이메일을 입력해주세요.';
  } else if (!emailRegex.test(value)) {
    message = '잘못된 이메일 형식입니다';
  }

  setError(emailInput, message, showErrors);
  return !message;
};

const validatePassword = (showErrors = false) => {
  const value = passwordInput.value;
  let message = '';

  if (!value) {
    message = '비밀번호를 입력해주세요.';
  } else if (value.length < 8) {
    message = '비밀번호를 8자 이상 입력해주세요.';
  }

  setError(passwordInput, message, showErrors);
  return !message;
};

const isEmailValid = () => {
  const value = emailInput.value.trim();
  return Boolean(value) && emailRegex.test(value);
};

const isPasswordValid = () => {
  const value = passwordInput.value;
  return Boolean(value) && value.length >= 8;
};

const updateButtonState = () => {
  loginButton.disabled = !(isEmailValid() && isPasswordValid());
};

emailInput.addEventListener('blur', () => {
  touched.email = true;
  validateEmail(true);
  updateButtonState();
});

emailInput.addEventListener('input', () => {
  validateEmail(touched.email);
  updateButtonState();
});

passwordInput.addEventListener('blur', () => {
  touched.password = true;
  validatePassword(true);
  updateButtonState();
});

passwordInput.addEventListener('input', () => {
  validatePassword(touched.password);
  updateButtonState();
});

toggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    if (!input) return;

    const isHidden = input.getAttribute('type') === 'password';
    input.setAttribute('type', isHidden ? 'text' : 'password');

    const icon = btn.querySelector('img');
    if (icon) icon.alt = isHidden ? '비밀번호 숨기기' : '비밀번호 보기';
  });
});

loginButton.addEventListener('click', () => {
  if (loginButton.disabled) return;
  window.location.href = '/items';
});

// initialize
updateButtonState();
