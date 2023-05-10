const validator = {
  isValid: function (creditCardNumber) {
    if (creditCardNumber.length < 10 || creditCardNumber.length > 16) {
      alert("Por favor verifica el número, parece que ese no es correcto");
      return false;
    }
    //usamos .split para que divida los numeros que nos da el usuario "" es el separador.
    // Y con map convertimos esos valores en numeros.
    const credit_array = creditCardNumber.split("").map(Number);
    //vamos a recorrer toda la matriz que nos dieron pero empezando desde atrás, mientras que i sea mayor o igual a cero
    // es decir y i=-2 nos indica que lo haremos en reversa y con el *= multiplicaremos por dos esas posiciones impares.
    for (let i = credit_array.length - 2; i >= 0; i -= 2) {
      credit_array[i] *= 2;
      if (credit_array[i] >= 10) { //si los numeros son mayores o iguales que 10 les restamos 9
        credit_array[i] -= 9;
      }
    }
    //Ahora sumamos TODOS los números
    const sum = credit_array.reduce((acc, val) => acc + val, 0);
    //es divisible por diez?
    return sum % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    const visibles = 4;
    const digitos = creditCardNumber.slice(0, -visibles).replace(/./g, '#'); //seleccionar una porción de la cadena creditCardNumber desde el índice 0 hasta -visible, o sea, desde el final hasta el principio según los que visibles diga..replace(/./g, '#'): Esto reemplaza cada dígito con un carácter de hashtag (#)
    const ultimos = creditCardNumber.slice(-visibles); //slice selecciona: esto se utiliza para obtener los últimos dígitos de la tarjeta después de ocultar los dígitos anteriores con el carácter de hashtag (#)
    return digitos + ultimos; //devuelve los tapados más los ultimos números.
  }
};

export default validator;