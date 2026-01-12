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

  const passwordElem = document.getElementById("password");
  const password = passwordElem.value;
  const passwordValid = password.length >= 8;

  const enable = emailValid && passwordValid;
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
