//Xử lý username input:
const usernameInput = document.querySelector(".username-input");
const usernameSuccess = document.querySelector(".username-success");
const usernameWarning = document.querySelector(".username-warning");
const usernameText = document.querySelector(".username-text");

usernameInput.addEventListener("input", () => {
  if (usernameInput.value) {
    usernameSuccess.classList.remove("hidden");
    usernameWarning.classList.add("hidden");
    usernameText.innerText = "";
    usernameInput.classList.remove("border-red-500");
  } else {
    usernameSuccess.classList.add("hidden");
    usernameWarning.classList.remove("hidden");
    usernameInput.classList.add("border-red-500");
    usernameText.innerText = "Username cannot be blank";
  }
});

//Xử lý ô email:
const emailInput = document.querySelector(".email-input");
const emailSuccess = document.querySelector(".email-success");
const emailWarning = document.querySelector(".email-warning");
const emailText = document.querySelector(".email-text");

emailInput.addEventListener("input", () => {
  if (emailInput.value) {
    if (!emailInput.value.includes("@")) {
      emailWarning.classList.remove("hidden");
      emailText.innerText = "Please enter valid email address";
      emailInput.classList.add("border-red-500");
    } else if (emailInput.value.includes("@")) {
      emailSuccess.classList.remove("hidden");
      emailWarning.classList.add("hidden");
      emailText.innerText = "";
      emailInput.classList.remove("border-red-500");
    }
  } else {
    emailWarning.classList.remove("hidden");
    emailSuccess.classList.add("hidden");
    emailText.innerText = "Email cannot be blank";
    emailInput.classList.add("border-red-500");
  }
});

// Xử lý password:
const passwordInput = document.querySelector(".password-input");
const passwordSuccess = document.querySelector(".password-success");
const passwordWarning = document.querySelector(".password-warning");
const passwordText = document.querySelector(".password-text");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value) {
    passwordSuccess.classList.remove("hidden");
    passwordWarning.classList.add("hidden");
    passwordText.innerText = "";
    passwordInput.classList.remove("border-red-500");
  } else {
    passwordSuccess.classList.add("hidden");
    passwordWarning.classList.remove("hidden");
    passwordInput.classList.add("border-red-500");
    passwordText.innerText = "Password cannot be blank";
  }
});

// Xử lý pass confirm:
const passConfirmInput = document.querySelector(".pass-confirm-input");
const passConfirmSuccess = document.querySelector(".pass-confirm-success");
const passConfirmWarning = document.querySelector(".pass-confirm-warning");
const passConfirmText = document.querySelector(".pass-confirm-text");

passConfirmInput.addEventListener("input", () => {
  if (passConfirmInput.value) {
    if (passConfirmInput.value !== passwordInput.value) {
      passConfirmSuccess.classList.add("hidden");
      passConfirmWarning.classList.remove("hidden");
      passConfirmInput.classList.add("border-red-500");
      passConfirmText.innerText = "Password does not match";
    } else {
      passConfirmSuccess.classList.remove("hidden");
      passConfirmWarning.classList.add("hidden");
      passConfirmText.innerText = "";
      passConfirmInput.classList.remove("border-red-500");
    }
  } else {
    passConfirmSuccess.classList.add("hidden");
    passConfirmWarning.classList.remove("hidden");
    passConfirmInput.classList.add("border-red-500");
    passConfirmText.innerText = "Password confirmation required";
  }
});
