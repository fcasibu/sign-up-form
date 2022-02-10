const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordInfo = document.querySelector('.password-info')
const passwordMatch = document.querySelector('.password-match')
const phoneNumber = document.querySelector('#phone-number');

password.addEventListener('focusin', () => {
  passwordInfo.textContent = "Minimum 8 characters";
  passwordInfo.style.opacity = 1;
  passwordInfo.style.visibility = "visible";
})

password.addEventListener('focusout', () => {
  if(password.value.length < 8) {
    password.style.backgroundColor = "#90277E";
    password.style.color = "white";
  } else {
    password.style.background = "white";
    password.style.color = "black";
  }
  passwordInfo.style.opacity = 0

})

password.addEventListener('input', () => {
  if(password.value.length >= 8) {
    passwordInfo.style.color = "lightgreen";
    password.style.background = "white";
    password.style.color = "black";
  } else {
    passwordInfo.style.color = "white";
  }
})

confirmPassword.addEventListener('focusout', () => {
  if(password.value !== confirmPassword.value) {
    confirmPassword.style.backgroundColor = "#90277E";
    confirmPassword.style.color = "white";
  } else {
    confirmPassword.style.background = "white";
    confirmPassword.style.color = "black";
  }
  passwordMatch.style.opacity = 0;
})
confirmPassword.addEventListener('input', () => {
  if(confirmPassword.value.length >= 8) {
    confirmPassword.style.background = "white";
    confirmPassword.style.color = "black";
  }
  if(password.value !== confirmPassword.value) {
    passwordMatch.style.opacity = 1;
    passwordMatch.style.color = "white";
    passwordMatch.textContent = "Passwords do not match";
  } else {
    passwordMatch.style.color = "lightgreen";
    passwordMatch.textContent = "Passwords matches";
  }
})

phoneNumber.addEventListener('input', () => {
  if(phoneNumber.value.length === 3 || phoneNumber.value.length === 7) {
    phoneNumber.value += '-';
  }
})
