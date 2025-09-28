// 로그인 페이지 요소들
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginButton = document.getElementById("loginButton");

// 회원가입 페이지 요소들
const signupEmail = document.getElementById("signupEmail");
const signupNickname = document.getElementById("signupNickname");
const signupPassword = document.getElementById("signupPassword");
const signupPasswordCheck = document.getElementById("signupPasswordCheck");
const signupEmailError = document.getElementById("signupEmailError");
const nicknameError = document.getElementById("nicknameError");
const signupPasswordError = document.getElementById("signupPasswordError");
const passwordCheckError = document.getElementById("passwordCheckError");
const signupButton = document.getElementById("signupButton");

const LoginEmailFocusout = () => {
  if (loginEmail.value === "") {
    loginEmail.classList.add("empty_input");
    emailError.textContent = "이메일을 입력해주세요";
    emailError.classList.add("show");
  } else if (!isValidEmail(loginEmail.value)) {
    loginEmail.classList.add("empty_input");
    emailError.textContent = "잘못된 이메일 형식입니다";
    emailError.classList.add("show");
  } else {
    loginEmail.classList.remove("empty_input");
    emailError.classList.remove("show");
  }
  checkLoginButton(); // 버튼 상태 체크
};

const SignupEmailFocusout = () => {
  if (signupEmail.value === "") {
    signupEmail.classList.add("empty_input");
    signupEmailError.textContent = "이메일을 입력해주세요";
    signupEmailError.classList.add("show");
  } else if (!isValidEmail(signupEmail.value)) {
    signupEmail.classList.add("empty_input");
    signupEmailError.textContent = "잘못된 이메일 형식입니다";
    signupEmailError.classList.add("show");
  } else {
    signupEmail.classList.remove("empty_input");
    signupEmailError.classList.remove("show");
  }
  checkSignupButton();
};

const LoginPasswordFocusout = () => {
  if (loginPassword.value === "") {
    loginPassword.classList.add("empty_input");
    passwordError.textContent = "비밀번호를 입력해주세요";
    passwordError.classList.add("show");
  } else if (loginPassword.value.length < 8) {
    loginPassword.classList.add("empty_input");
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요";
    passwordError.classList.add("show");
  } else {
    loginPassword.classList.remove("empty_input");
    passwordError.classList.remove("show");
  }
  checkLoginButton();
};

const SignupPasswordFocusout = () => {
  if (signupPassword.value === "") {
    signupPassword.classList.add("empty_input");
    signupPasswordError.textContent = "비밀번호를 입력해주세요";
    signupPasswordError.classList.add("show");
  } else if (signupPassword.value.length < 8) {
    signupPassword.classList.add("empty_input");
    signupPasswordError.textContent = "비밀번호를 8자 이상 입력해주세요";
    signupPasswordError.classList.add("show");
  } else {
    signupPassword.classList.remove("empty_input");
    signupPasswordError.classList.remove("show");
  }
  checkSignupButton();
};

const NicknameFocusout = () => {
  if (signupNickname.value === "") {
    signupNickname.classList.add("empty_input");
    nicknameError.textContent = "닉네임을 입력해주세요";
    nicknameError.classList.add("show");
  } else {
    signupNickname.classList.remove("empty_input");
    nicknameError.classList.remove("show");
  }
  checkSignupButton();
};

const PasswordCheckFocusout = () => {
  if (signupPassword.value !== signupPasswordCheck.value) {
    signupPasswordCheck.classList.add("empty_input");
    signupPasswordCheckError.textContent = "비밀번호가 일치하지 않습니다";
    signupPasswordCheckError.classList.add("show");
  } else {
    signupPasswordCheck.classList.remove("empty_input");
    signupPasswordCheckError.classList.remove("show");
  }
  checkSignupButton();
};

// 버튼 상태 체크 함수
const checkLoginButton = () => {
  const hasEmailError = emailError.classList.contains("show");
  const hasPasswordError = passwordError.classList.contains("show");
  const isEmailEmpty = loginEmail.value === "";
  const isPasswordEmpty = loginPassword.value === "";

  if (isEmailEmpty || isPasswordEmpty || hasEmailError || hasPasswordError) {
    loginButton.disabled = true;
  } else {
    loginButton.disabled = false;
  }
};

const checkSignupButton = () => {
  const NicknameError = nicknameError.classList.contains("show");
  const hasEmailError = signupEmailError.classList.contains("show");
  const hasPasswordError = signupPasswordError.classList.contains("show");
  const hasPasswordCheckError =
    signupPasswordCheckError.classList.contains("show");
  const isNicknameEmpty = nicknameError.classList.contains("show");
  const isEmailEmpty = signupEmail.value === "";
  const isPasswordEmpty = signupPassword.value === "";
  const isPasswordCheckEmpty = signupPasswordCheck.value === "";

  if (
    isNicknameEmpty ||
    isEmailEmpty ||
    isPasswordEmpty ||
    isPasswordCheckEmpty ||
    NicknameError ||
    hasEmailError ||
    hasPasswordError ||
    hasPasswordCheckError
  ) {
    signupButton.disabled = true;
  } else {
    signupButton.disabled = false;
  }
};

const LoginButtonClick = (e) => {
  e.preventDefault();
  if (!loginButton.disabled) {
    console.log("로그인 시도:", loginEmail.value);
    window.location.href = "../pages/items.html";
  }
};

const SignupButtonClick = (e) => {
  e.preventDefault();
  if (!signupButton.disabled) {
    console.log("회원가입 시도:", signupEmail.value);
    window.location.href = "../pages/items.html";
  }
};

// 이메일 focusout
if (loginEmail) {
  loginEmail.addEventListener("focusout", LoginEmailFocusout);
}
if (signupEmail) {
  signupEmail.addEventListener("focusout", SignupEmailFocusout);
}

// 비밀번호 focusout
if (loginPassword) {
  loginPassword.addEventListener("focusout", LoginPasswordFocusout);
}
if (signupPassword) {
  signupPassword.addEventListener("focusout", SignupPasswordFocusout);
}

// 닉네임 focusout
if (signupNickname) {
  signupNickname.addEventListener("focusout", NicknameFocusout);
}

// 비밀번호 확인 focusout
if (signupPasswordCheck) {
  signupPasswordCheck.addEventListener("focusout", PasswordCheckFocusout);
}

// 로그인 버튼 이벤트
if (loginButton) {
  loginButton.addEventListener("click", LoginButtonClick);
}

// 회원가입 버튼 이벤트
if (signupButton) {
  signupButton.addEventListener("click", SignupButtonClick);
}

// 이메일 형식 검증 함수
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 정규식
  return emailRegex.test(email); // 이메일 형식 검증
}
