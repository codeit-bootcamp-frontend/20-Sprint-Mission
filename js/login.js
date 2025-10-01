const pwInput = document.querySelector(".password");
const toggleBtn = document.querySelector(".toggle_pw");

toggleBtn.addEventListener("click", () => {
    pwInput.type = pwInput.type === "password" ? "text" : "password";
    toggleBtn.src = pwInput.type === "password" ? "img/btn_visibility_off.png" : "img/btn_visibility_on.png";
    checkPassword.src = pwInput.type === "password" ? "img/btn_visibility_off.png" : "img/btn_visibility_on.png";
});

const pwInput2 = document.querySelector(".check_input");
const toggleBtn2 = document.querySelector(".check_img");

toggleBtn2.addEventListener("click", () => {
    pwInput2.type = pwInput2.type === "password" ? "text" : "password";
    toggleBtn2.src = pwInput2.type === "password" ? "img/btn_visibility_off.png" : "img/btn_visibility_on.png";
});