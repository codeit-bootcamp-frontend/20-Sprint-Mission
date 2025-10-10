const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password_confirm");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const signUpButton = document.querySelector("#signUpButton");
const loginButton = document.querySelector("#loginButton");
signUpButton ? signUpButton.setAttribute("disabled", true) : loginButton.setAttribute("disabled", true);

const passwordVisibleButtons = document.querySelectorAll("#passwordVisibleButton");

const checkEmailData = (e) => {
  const emailElementParent = e.target.parentNode;
  const emailErrorMessegeEmpty = "이메일을 입력해 주세요.";
  const emailErrorMessegeFormat = "잘못된 이메일 형식입니다.";

  let emailErrorMsgElement = document.createElement("p");
  emailErrorMsgElement.className = "error_msg";

  const emailExistingErrorMsg = emailElementParent.querySelector(".error_msg");
  if (emailExistingErrorMsg) {
    emailExistingErrorMsg.remove();
  }

  if (email.value === "") {
    email.classList.add("error");
    emailErrorMsgElement.textContent = emailErrorMessegeEmpty;
    emailElementParent.append(emailErrorMsgElement);
  } else if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    emailErrorMsgElement.textContent = emailErrorMessegeFormat;
    emailElementParent.append(emailErrorMsgElement);
  } else {
    email.classList.remove("error");
    const emailExistingError = emailElementParent.querySelector(".error_msg");
    if (emailExistingError) emailExistingError.remove();
  }

  submitButtonVisible();
};

const checkPasswordData = (e) => {
  const passwordElementParent = e.target.parentNode;
  const passwordErrorMessegeEmpty = "비밀번호를 입력해주세요.";
  const passwordErrorMessegeFormat = "비밀번호를 8자 이상 입력해주세요.";

  let passwordErrorMsgElement = document.createElement("p");
  passwordErrorMsgElement.className = "error_msg";

  const passwordExistingErrorMsg = passwordElementParent.querySelector(".error_msg");
  if (passwordExistingErrorMsg) {
    passwordExistingErrorMsg.remove();
  }

  if (password.value === "") {
    password.classList.add("error");
    passwordErrorMsgElement.textContent = passwordErrorMessegeEmpty;
    passwordElementParent.append(passwordErrorMsgElement);
  } else if (password.value.length < 8) {
    password.classList.add("error");
    passwordErrorMsgElement.textContent = passwordErrorMessegeFormat;
    passwordElementParent.append(passwordErrorMsgElement);
  } else {
    password.classList.remove("error");
    const passwordExistingError = passwordElementParent.querySelector(".error_msg");
    if (passwordExistingError) passwordExistingError.remove();
  }

  submitButtonVisible();
};

const checkPasswordConfirmData = (e) => {
  const confirmElementParent = e.target.parentNode;
  const confirmErrorMessegeEmpty = "비밀번호를 입력해주세요.";
  const confirmErrorMessege = "비밀번호가 일치하지 않습니다..";

  let confirmErrorMsgElement = document.createElement("p");
  confirmErrorMsgElement.className = "error_msg";

  const confirmExistingErrorMsg = confirmElementParent.querySelector(".error_msg");
  if (confirmExistingErrorMsg) {
    confirmExistingErrorMsg.remove();
  }

  if (passwordConfirm.value === "") {
    passwordConfirm.classList.add("error");
    confirmErrorMsgElement.textContent = confirmErrorMessegeEmpty;
    confirmElementParent.append(confirmErrorMsgElement);
  } else if (password.value !== passwordConfirm.value) {
    passwordConfirm.classList.add("error");
    confirmErrorMsgElement.textContent = confirmErrorMessege;
    confirmElementParent.append(confirmErrorMsgElement);
  } else {
    passwordConfirm.classList.remove("error");
    const confirmExistingError = confirmElementParent.querySelector(".error_msg");
    if (confirmExistingError) confirmExistingError.remove();
  }

  submitButtonVisible();
};

function submitButtonVisible() {
  const emailCheck = email ? emailRegex.test(email.value) : true;
  const passwordCheck = password ? password.value.length >= 8 : true;
  const passwordConfirmCheck = passwordConfirm ? password.value === passwordConfirm.value && passwordConfirm.value !== "" : true;

  if (loginButton) {
    const loginCehck = emailCheck && passwordCheck;
    loginButton.toggleAttribute("disabled", !loginCehck);
  }

  if (signUpButton) {
    const signUpCehck = emailCheck && passwordCheck && passwordConfirmCheck;
    signUpButton.toggleAttribute("disabled", !signUpCehck);
  }
}

const passwordVisibleFunction = (e) => {
  const passwordInput = e.target.parentNode.querySelector("input");
  const passwordVisibleButton = passwordInput.nextElementSibling;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordVisibleButton.classList.add("visible");
  } else {
    passwordInput.type = "password";
    passwordVisibleButton.classList.remove("visible");
  }
};

email?.addEventListener("focusout", checkEmailData);
password?.addEventListener("focusout", checkPasswordData);
passwordConfirm?.addEventListener("focusout", checkPasswordConfirmData);
passwordVisibleButtons?.forEach((button) => {
  button.addEventListener("click", passwordVisibleFunction);
});
