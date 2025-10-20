const passWord = document.querySelector("#password");
const eyeIcon = document.querySelector(".eye-icon");
// const visibility = eyeIcon.getAttribute("src");

eyeIcon.addEventListener("click", function () {
  if (eyeIcon.getAttribute("src") === "./img/input/btn_visibility_off.png") {
    eyeIcon.setAttribute("src", "./img/input/btn_visibility_on.png");
    passWord.setAttribute("type", "text");
  } else {
    eyeIcon.setAttribute("src", "./img/input/btn_visibility_off.png");
    passWord.setAttribute("type", "password");
  }
});
