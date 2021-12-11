const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const expression = /\w+@\w+\.[a-z]/;
let formControl = '';
let usernameValue;
let emailValue;
let passwordValue;
let password2Value;

function checkInputs(e) {
  e.preventDefault();

  // trim() se usa para remover los espacios en blanco
  usernameValue = username.value.trim();
  sessionStorage.setItem('nombreUsuario', usernameValue);
  emailValue = email.value.trim();
  passwordValue = password.value.trim();
  password2Value = password2.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Nombre de usuario no puede estar en blanco');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email no puede estar en blanco');
  } else if (!expression.test(emailValue)) {
    setErrorFor(email, 'Email no valido');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Contraseña no puede estar en blanco');
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Contraseña no puede estar en blanco');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'No coincide con la contraseña anterior');
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}
function setSuccessFor(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function enterPage(e) {
  e.preventDefault();

  if (
    usernameValue !== '' &&
    passwordValue === password2Value &&
    password2Value !== '' &&
    passwordValue !== '' &&
    emailValue !== '' &&
    expression.test(emailValue)
  ) {
    $('#successMessage').html('Registro exitoso!');
    setTimeout(() => {
      window.location = '../index.html';
    }, 3000);
  }
}

const mostrarUsuarioRegistrado = () => {
  if (sessionStorage.getItem('nombreUsuario') === null) {
    sessionStorage.getItem('nombreUsuario') === '';
  } else {
    sessionStorage.getItem('nombreUsuario');
  }
};
