'use strict'
var numero=parseInt(prompt('ingrese el numero',0));
var contador=0;
var suma=0;
while(numero >= 0 && !isNaN(numero)){
       suma= numero+suma;
       contador++;
       numero=parseInt(prompt('ingrese el numero',0));
    }
alert("la suma de los numeros es igual a "+suma+"\n y la media es igual a "+suma/contador);