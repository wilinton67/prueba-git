'use strict'

var numero1 = prompt("Por favor, ingrese el primer numero", 0);

var numero2 = prompt("Por favor, ingrese el segundo numero", 0);


while (numero1 && numero2) {
    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
        numero1 = prompt("Por favor, ingrese el primer numero", 0);
        numero2 = prompt("Por favor, ingrese el segundo numero", 0);
    }
    if (numero1 > numero2) {
        alert("El numero mayor es el numero " + numero1);
        break;
    }
    if (numero2 > numero1) {
        alert("El numero mayor es el numero " + numero2);
        break;
    }
    else {
        alert("Ambos numero son iguales");
        break;
    }

}