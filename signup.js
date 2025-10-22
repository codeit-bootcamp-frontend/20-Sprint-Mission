const passWord = document.querySelectorAll("#password");
const eyeIcon = document.querySelectorAll(".eye-icon");

eyeIcon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    const input = icon.previousElementSibling;

    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
      icon.setAttribute("src", "./img/input/btn_visibility_on.png");
    } else {
      input.setAttribute("type", "password");
      icon.setAttribute("src", "./img/input/btn_visibility_off.png");
    }
  });
});
