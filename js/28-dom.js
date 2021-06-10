'use strict'

/*var caja = document.querySelector("#micaja");
caja.innerHTML= "Texto en la caja desde javascript";
caja.style.background="red";
caja.style.fontSize="25px";
console.log(caja);
*/
var div=document.getElementsByTagName('div');

div[2].className="amarillo";

var divRojo= document.getElementsByClassName('rojo');
var divAmarillo= document.getElementsByClassName('amarillo')
for(var elemento in divRojo){
    if(divRojo[elemento].className == "rojo"){
        divRojo[elemento].style.background="red";
    }
}


for(elemento in divAmarillo){
    if(divAmarillo[elemento].className == "amarillo"){
        divAmarillo[elemento].style.background="yellow";
    }
}

var etiqueta= document.querySelectorAll('div');

for(elemento in etiqueta){
    
        etiqueta[elemento].style.background="yellow";
    
}