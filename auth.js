// Auth 활성화
const form = document.querySelector("form");
const authBt = document.querySelector(".auth-bt");
const loginBt = document.querySelector(".auth-bt.login");
const joinBt = document.querySelector(".auth-bt.join");
const emailInput = document.querySelector(".input-contain .email");
const passwordInput = document.querySelector(".input-contain .password");
const passwordConfirmInput = document.querySelector(
  ".input-contain .password-confirm"
);

form.addEventListener("input", () => {
  authBt.disabled = !form.checkValidity();
});

const handleLoginClick = (e) => {
  e.preventDefault();
  window.location.href = "/items.html";
};

if (loginBt) {
  loginBt.addEventListener("click", handleLoginClick);
}

const handleJoinClick = (e) => {
  e.preventDefault();
  window.location.href = "/login.html";
};

if (joinBt) {
  joinBt.addEventListener("click", handleJoinClick);
}

// input 이메일 error 처리
const emailNoneError = document.querySelector(".error-message.email-none");
const emailWrongError = document.querySelector(".error-message.email-wrong");

const handleEmailFocusout = (e) => {
  const value = e.target.value.trim();
  if (value.length === 0) {
    emailNoneError.classList.add("show");
    emailInput.classList.add("error-box");
    emailWrongError.classList.remove("show");
  } else if (!emailInput.checkValidity()) {
    emailNoneError.classList.remove("show");
    emailInput.classList.add("error-box");
    emailWrongError.classList.add("show");
  } else {
    emailNoneError.classList.remove("show");
    emailWrongError.classList.remove("show");
    emailInput.classList.remove("error-box");
  }
};
emailInput.addEventListener("focusout", handleEmailFocusout);

// input 비밀번호 error 처리
const passwordNoneError = document.querySelector(
  ".error-message.password-none"
);
const passwordWrongError = document.querySelector(
  ".error-message.password-wrong"
);

let passwordValue = "";

const handlePasswordFocusout = (e) => {
  passwordValue = e.target.value.trim();
  if (passwordValue.length === 0) {
    passwordNoneError.classList.add("show");
    passwordInput.classList.add("error-box");
    passwordWrongError.classList.remove("show");
  } else if (!passwordInput.checkValidity()) {
    passwordNoneError.classList.remove("show");
    passwordInput.classList.add("error-box");
    passwordWrongError.classList.add("show");
  } else {
    passwordNoneError.classList.remove("show");
    passwordWrongError.classList.remove("show");
    passwordInput.classList.remove("error-box");
  }
};
passwordInput.addEventListener("focusout", handlePasswordFocusout);

// input 비밀번호 view 처리
const passwordNoViewIcon = document.querySelector(".no-view-bt-icon");
const passwordViewIcon = document.querySelector(".view-bt-icon");
passwordNoViewIcon.classList.add("show");

const handlePasswordView = () => {
  const isHidden = passwordInput.type === "password";

  if (isHidden) {
    passwordInput.type = "text";
    passwordViewIcon.classList.add("show");
    passwordNoViewIcon.classList.remove("show");
  } else {
    passwordInput.type = "password";
    passwordNoViewIcon.classList.add("show");
    passwordViewIcon.classList.remove("show");
  }
};
passwordNoViewIcon.addEventListener("click", handlePasswordView);
passwordViewIcon.addEventListener("click", handlePasswordView);

// input 비밀번호 확인 view 처리
const passwordConfirmNoViewIcon = document.querySelector(
  ".no-view-bt-icon.confirm"
);
const passwordConfirmViewIcon = document.querySelector(".view-bt-icon.confirm");
passwordConfirmNoViewIcon.classList.add("show");

const handlePasswordConfirmView = () => {
  const isHidden = passwordConfirmInput.type === "password";

  if (isHidden) {
    passwordConfirmInput.type = "text";
    passwordConfirmViewIcon.classList.add("show");
    passwordConfirmNoViewIcon.classList.remove("show");
  } else {
    passwordConfirmInput.type = "password";
    passwordConfirmNoViewIcon.classList.add("show");
    passwordConfirmViewIcon.classList.remove("show");
  }
};
if (passwordConfirmNoViewIcon) {
  passwordConfirmNoViewIcon.addEventListener(
    "click",
    handlePasswordConfirmView
  );
}

if (passwordConfirmViewIcon) {
  passwordConfirmViewIcon.addEventListener("click", handlePasswordConfirmView);
}

// input 비밀번호 확인 error 처리
const passwordConfirmError = document.querySelector(
  ".error-message.password-confirm"
);

const handlePasswordConfirm = (e) => {
  const passwordConfirmValue = e.target.value.trim();
  console.log(passwordConfirmValue);
  if (passwordValue !== passwordConfirmValue) {
    passwordConfirmError.classList.add("show");
    passwordConfirmInput.classList.add("error-box");
  } else {
    passwordConfirmError.classList.remove("show");
    passwordConfirmInput.classList.remove("error-box");
  }
};
if (passwordConfirmInput) {
  passwordConfirmInput.addEventListener("input", handlePasswordConfirm);
}
