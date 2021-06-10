'use strict'
var numero1=parseInt(prompt("ingrese el primer numero",0))
var numero2=parseInt(prompt("ingrese el segundo numero",0))

while(isNaN(numero1) || isNaN(numero2) || (numero1>=numero2)){
    alert("recuerde que el primer numero debe ser menor al segundo numero \n y ambos deben ser numeros")
    numero1=parseInt(prompt("ingrese el primer numero",0))
    numero2=parseInt(prompt("ingrese el segundo numero",0))
}

for (let i = numero1+1; i<numero2; i++) {
   document.write(i+'<br>');
}