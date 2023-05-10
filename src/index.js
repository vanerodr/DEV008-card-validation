import validator from './validator.js';

function validate() {
  const creditCardNumber = document.getElementById("credit-card-number").value; // Recupera el número de tarjeta de crédito ingresado por el usuario
  const masked = validator.maskify(creditCardNumber);

  if (validator.isValid(creditCardNumber)) {
    alert("¡Suscripción exitosa! Número de tarjeta: " + masked);
  } else {
    alert("¡Ups! El número " + masked + " no es valido");
  }
}

document.getElementById("boton-inicio").addEventListener("click", validate);  