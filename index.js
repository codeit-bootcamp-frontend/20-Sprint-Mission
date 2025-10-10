const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const checkEmailData = (e) => {
  const emailElementParent = e.target.parentNode;
  const emailErrorMessegeEmpty = "이메일을 입력해 주세요.";
  const emailErrorMessegeFormat = "잘못된 이메일 형식입니다.";

  let emailErrorMsgElement = document.createElement("p");
  emailErrorMsgElement.className = "error_msg";

  const emailExistingErrorMsg = document.querySelector(".error_msg");
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
};

const checkPasswordData = (e) => {
  const passwordElementParent = e.target.parentNode;
  const passwordErrorMessegeEmpty = "비밀번호를 입력해주세요.";
  const passwordErrorMessegeFormat = "비밀번호를 8자 이상 입력해주세요.";

  let passwordErrorMsgElement = document.createElement("p");
  passwordErrorMsgElement.className = "error_msg";

  const passwordExistingErrorMsg = document.querySelector(".error_msg");
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
};

email.addEventListener("focusout", checkEmailData);
password.addEventListener("focusout", checkPasswordData);
