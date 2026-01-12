function onEmailBlur() {
  const emailElem = document.getElementById("email");
  const statusElem = document.getElementById("email-status");
  const email = emailElem.value;
  if (!email) {
    statusElem.textContent = "이메일을 입력해주세요.";
    emailElem.classList.add("red-border");
  } else {
    const regExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gm;
    const res = email.match(regExp);
    if (!res) {
      statusElem.textContent = "잘못된 이메일입니다.";
      emailElem.classList.add("red-border");
    } else {
      statusElem.textContent = "";
      emailElem.classList.remove("red-border");
    }
  }
  checkLoginEnable();
}

function onEmailFocus() {
  const emailElem = document.getElementById("email");
  emailElem.classList.remove("red-border");
}

function onPasswordBlur() {
  const passwordElem = document.getElementById("password");
  const statusElem = document.getElementById("password-status");
  const password = passwordElem.value;
  if (!password) {
    statusElem.textContent = "비밀번호를 입력해주세요.";
    passwordElem.classList.add("red-border");
  } else {
    if (password.length < 8) {
      statusElem.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordElem.classList.add("red-border");
    } else {
      statusElem.textContent = "";
      passwordElem.classList.remove("red-border");
    }
  }
  checkLoginEnable();
}

function onPasswordFocus() {
  const passwordElem = document.getElementById("password");
  passwordElem.classList.remove("red-border");
}

function checkLoginEnable() {
  const emailElem = document.getElementById("email");
  const email = emailElem.value;
  const regExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gm;
  const res = email.match(regExp);
  const emailValid = res != null;

  const nicknameElem = document.getElementById("nickname");
  const nickname = nicknameElem.value;
  const nicknameValid = nickname.length > 0;

  const passwordElem = document.getElementById("password");
  const password = passwordElem.value;
  const passwordValid = password.length >= 8;

  const passwordConfirmElem = document.getElementById("password-confirm");
  const passwordConfirm = passwordConfirmElem.value;
  const passwordConfirmValid = password == passwordConfirm;

  const enable =
    emailValid && passwordValid && nicknameValid && passwordConfirmValid;
  const button = document.querySelector(".login-button");
  if (!enable) {
    button.classList.add("disabled");
  } else {
    button.classList.remove("disabled");
  }
}

function goItems() {
  location.href = "/items";
}

function onNicknameBlur() {
  const nicknameElem = document.getElementById("nickname");
  const statusElem = document.getElementById("nickname-status");
  const nickname = nicknameElem.value;
  if (!nickname) {
    statusElem.textContent = "닉네임을 입력해주세요.";
    nicknameElem.classList.add("red-border");
  } else {
    statusElem.textContent = "";
    nicknameElem.classList.remove("red-border");
  }
  checkLoginEnable();
}

function onNicknameFocus() {
  const nicknameElem = document.getElementById("nickname");
  nicknameElem.classList.remove("red-border");
}

function onPasswordConfirmBlur() {
  const passwordElem = document.getElementById("password");
  const password = passwordElem.value;

  const passwordConfirmElem = document.getElementById("password-confirm");
  const statusElem = document.getElementById("password-confirm-status");
  const passwordConfirm = passwordConfirmElem.value;
  if (password != passwordConfirm) {
    statusElem.textContent = "비밀번호가 일치하지 않습니다.";
    passwordConfirmElem.classList.add("red-border");
  } else {
    statusElem.textContent = "";
    passwordConfirmElem.classList.remove("red-border");
  }
  checkLoginEnable();
}

function onPasswordConfirmFocus() {
  const passwordConfirmElem = document.getElementById("password-confirm");
  passwordConfirmElem.classList.remove("red-border");
}

function goLogin() {
  location.href = "/login.html";
}
