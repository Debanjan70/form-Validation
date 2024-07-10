// selecting input fields

const nameValue = document.getElementById("name-value");
const emailValue = document.getElementById("email-value");
const pwdValue = document.getElementById("pwd-value");
const mobileValue = document.getElementById("number-value");
const occValue = document.getElementById("occ-value");

const submitBtn = document.getElementById("btn");

//  selecting error fields

const nameErr = document.getElementById("name-error");
const emailErr = document.getElementById("email-error");
const pwdErr = document.getElementById("pwd-error");
const mobileErr = document.getElementById("number-error");
const occErr = document.getElementById("occ-error");

function validateName() {
  const name = nameValue.value;
  if (name.length == 0) {
    submitBtn.disabled = true;
    nameErr.innerHTML = "Name is required !";
    return false;
  }
  if (!name.match(/^[a-zA-z]{3,}\s{1}[a-zA-z]+$/)) {
    submitBtn.disabled = true;
    nameErr.innerHTML = "Fullname is required !";
    return false;
  }
  submitBtn.disabled = false;
  nameErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`;
  return true;
}

nameValue.addEventListener("keyup", validateName);
nameValue.addEventListener("blur", validateName);

function validateEmail() {
  const email = emailValue.value;
  if (email.length == 0) {
    submitBtn.disabled = true;
    emailErr.innerHTML = "E-mail is required !";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9]*[@]{1}[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/)) {
    submitBtn.disabled = true;
    emailErr.innerHTML = "Invalid E-mail id !";
    return false;
  }
  submitBtn.disabled = false;
  emailErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`;
  return true;
}

emailValue.addEventListener("keyup", validateEmail);
emailValue.addEventListener("blur", validateEmail);

function validatePwd() {
  const pwd = pwdValue.value;
  if (pwd.length == 0) {
    submitBtn.disabled = true;
    pwdErr.innerHTML = "Password is required !";
    return false;
  }
  if (
    !pwd.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
  ) {
    submitBtn.disabled = true;
    pwdErr.innerHTML =
      "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.";
    return false;
  }
  submitBtn.disabled = false;
  pwdErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`;
  return true;
}

pwdValue.addEventListener("keyup", validatePwd);
pwdValue.addEventListener("blur", validatePwd);

function validateMobile() {
  const mobile = mobileValue.value;
  console.log(mobile);
  if (mobile.length === 0) {
    submitBtn.disabled = true;
    mobileErr.innerHTML = "Number is required !";
    return false;
  }
  if (
    !mobile.match(
      /^\+?(\d{1,3})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/
    )
  ) {
    submitBtn.disabled = true;
    mobileErr.innerHTML = "Invalid mobile number format.";
    return false;
  }
  submitBtn.disabled = false;
  mobileErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`;
  return true;
}

mobileValue.addEventListener("input", validateMobile);
mobileValue.addEventListener("blur", validateMobile);

function validateOcc() {
  const occ = occValue.value;
  if (occ.length == 0) {
    submitBtn.disabled = true;
    occErr.innerHTML = "Occupation is required !";
    return false;
  }
  if (!occ.match(/^[A-Za-z\s]{2,}$/)) {
    submitBtn.disabled = true;
    occErr.innerHTML =
      "Invalid occupation format. Only letters and spaces are allowed.";
    return false;
  }
  submitBtn.disabled = false;
  occErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`;
  return true;
}

occValue.addEventListener("keyup", validateOcc);
occValue.addEventListener("blur", validateOcc);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateName()) {
    return false;
  }
  if (!validateEmail()) {
    return false;
  }
  if (!validatePwd()) {
    return false;
  }
  if (!validateMobile()) {
    return false;
  }
  if (!validateOcc()) {
    return false;
  }
});

