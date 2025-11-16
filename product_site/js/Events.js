
//Curtis Palmer 11/16/2025
// This script handles a signup form with validation and feedback messages
// I used AI to help me implement the .indexOf method for the email varification



const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const feedback = document.getElementById('feedback');


function showMessage(msg, type) {
  feedback.textContent = msg;
  feedback.className = type;
}

function focusUsername() {
  showMessage('Enter a username.');
}

function focusEmail() {
  showMessage('Enter an email.');
}


function blurUsername() {
  var v = usernameInput.value;

  if (v == '') {
    showMessage('Username cannot be empty.', 'error');
  } else {
    showMessage('Username OK.', 'success');
  }
}

function blurEmail() {
  var v = emailInput.value;

  if (v.indexOf('@') < 0) {
    showMessage('Email must contain @.', 'error');
  } else {
    showMessage('Valid email.', 'success');
  }
}



function submitForm() {
  showMessage('Your information was successfully recorded!', 'success');
}


usernameInput.addEventListener('focus', focusUsername);
emailInput.addEventListener('focus', focusEmail);

usernameInput.addEventListener('blur', blurUsername);
emailInput.addEventListener('blur', blurEmail);

signupForm.addEventListener('submit', submitForm);