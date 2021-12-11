function checkCardInputs() {
  if (!loginExpected()) {
  } else {
    const expressionLetter = /[A-Za-z]/;
    const expressionNumber = /[0-9]/;
    const cardNameInput = document.getElementById('cardName');
    const cardNumberInput = document.getElementById('cardNumber');
    const expirationDateInput = document.getElementById('expirationDate');
    const securityCodeInput = document.getElementById('securityCode');

    if (!cardNameInput.value || (cardNameInput.value && cardNameInput.value.trim() === '')) {
      setErrorForC(cardNameInput, 'Nombre del titular no puede estar en blanco');
    } else if (!expressionLetter.test(cardNameInput.value)) {
      setErrorForC(cardNameInput, 'Nombre no valido, solo se permiten LETRAS');
    } else {
      setSuccessForC(cardNameInput);
    }

    if (!cardNumberInput.value || (cardNumberInput.value && cardNumberInput.value.trim() === '')) {
      setErrorForC(cardNumberInput, 'Número de la tarjeta no puede estar en blanco');
    } else if (!expressionNumber.test(cardNumberInput.value)) {
      setErrorForC(cardNumberInput, 'Número de tarjeta no valido, solo se permiten NÚMEROS');
    } else {
      setSuccessForC(cardNumberInput);
    }

    if (!expirationDateInput.value || (expirationDateInput.value && expirationDateInput.value.trim() === '')) {
      setErrorForC(expirationDateInput, 'Contraseña no puede estar en blanco');
    } else if (!expressionNumber.test(expirationDateInput.value)) {
      setErrorForC(expirationDateInput, 'Fecha de experación no valida, solo se permiten NÚMEROS');
    } else {
      setSuccessForC(expirationDateInput);
    }

    if (!securityCodeInput.value || (securityCodeInput.value && securityCodeInput.value.trim() === '')) {
      setErrorForC(securityCodeInput, 'Contraseña no puede estar en blanco');
    } else if (!expressionNumber.test(securityCodeInput.value)) {
      setErrorForC(securityCodeInput, 'Código de seguridad no valido, solo se permiten NÚMEROS');
    } else {
      setSuccessForC(securityCodeInput);
    }
    sellSuccess();
  }
}

function setErrorForC(input, message) {
  const formCardValue = input.parentElement;
  const small = formCardValue.querySelector('small');
  formCardValue.className = 'form-control error';
  small.innerText = message;
}
function setSuccessForC(input) {
  formCardValue = input.parentElement;
  formCardValue.className = 'form-control success';
}

function sellSuccess() {
  const expressionLetter = /[A-Za-z]/;
  const expressionNumber = /[0-9]/;
  const cardNameInput = document.getElementById('cardName');
  const cardNumberInput = document.getElementById('cardNumber');
  const expirationDateInput = document.getElementById('expirationDate');
  const securityCodeInput = document.getElementById('securityCode');
  if (
    (cardNameInput.value || (cardNameInput.value && cardNameInput.value.trim() !== '')) &&
    expressionLetter.test(cardNameInput.value) &&
    (cardNumberInput.value || (cardNumberInput.value && cardNumberInput.value.trim() !== '')) &&
    expressionNumber.test(cardNumberInput.value) &&
    (expirationDateInput.value || (expirationDateInput.value && expirationDateInput.value.trim() !== '')) &&
    expressionNumber.test(expirationDateInput.value) &&
    (securityCodeInput.value || (securityCodeInput.value && securityCodeInput.value.trim() !== '')) &&
    expressionNumber.test(securityCodeInput.value)
  ) {
    alert(
      'Muchas gracias por su compra! por favor revise su correo electrónico, recibirá el comprobante de la compra y los pasos a seguir para adquirir los productos comprados.'
    );
    setTimeout(() => {
      sessionStorage.clear();
      window.location = '../index.html';
    }, 3000);
  }
}
