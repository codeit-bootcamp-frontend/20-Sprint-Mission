const emailInput = document.getElementById('email');
const nicknameInput = document.getElementById('nickname');
const passwordInput = document.getElementById('password');
const passwordCheckInput = document.getElementById('passwordCheck');
const signupButton = document.querySelector('.loginButton');
const toggleButtons = document.querySelectorAll('.togglePassword');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const touched = {
  email: false,
  nickname: false,
  password: false,
  passwordCheck: false,
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

const validateNickname = (showErrors = false) => {
  const value = nicknameInput.value.trim();
  const message = !value ? '닉네임을 입력해주세요.' : '';
  setError(nicknameInput, message, showErrors);
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

const validatePasswordCheck = (showErrors = false) => {
  const base = passwordInput.value;
  const confirm = passwordCheckInput.value;
  let message = '';

  if (!confirm || base !== confirm) {
    message = '비밀번호가 일치하지 않습니다.';
  }

  setError(passwordCheckInput, message, showErrors);
  return !message;
};

const isEmailValid = () => {
  const value = emailInput.value.trim();
  return Boolean(value) && emailRegex.test(value);
};

const isNicknameValid = () => Boolean(nicknameInput.value.trim());

const isPasswordValid = () => {
  const value = passwordInput.value;
  return Boolean(value) && value.length >= 8;
};

const isPasswordCheckValid = () => {
  const base = passwordInput.value;
  const confirm = passwordCheckInput.value;
  return Boolean(confirm) && base === confirm;
};

const updateButtonState = () => {
  signupButton.disabled = !(
    isEmailValid() &&
    isNicknameValid() &&
    isPasswordValid() &&
    isPasswordCheckValid()
  );
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

nicknameInput.addEventListener('blur', () => {
  touched.nickname = true;
  validateNickname(true);
  updateButtonState();
});

nicknameInput.addEventListener('input', () => {
  validateNickname(touched.nickname);
  updateButtonState();
});

passwordInput.addEventListener('blur', () => {
  touched.password = true;
  validatePassword(true);
  if (touched.passwordCheck) validatePasswordCheck(true);
  updateButtonState();
});

passwordInput.addEventListener('input', () => {
  validatePassword(touched.password);
  if (touched.passwordCheck) validatePasswordCheck(true);
  updateButtonState();
});

passwordCheckInput.addEventListener('blur', () => {
  touched.passwordCheck = true;
  validatePasswordCheck(true);
  updateButtonState();
});

passwordCheckInput.addEventListener('input', () => {
  validatePasswordCheck(touched.passwordCheck);
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

signupButton.addEventListener('click', () => {
  if (signupButton.disabled) return;
  window.location.href = '../login/login.html';
});

// initialize
updateButtonState();
