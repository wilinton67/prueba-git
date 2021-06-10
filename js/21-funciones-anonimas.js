'use strict'

function suma(numero1, numero2, sumaMuestra, sumaPorDos){
    var suma= numero1 + numero2;
    sumaMuestra(suma);
    sumaPorDos(suma);
   }


suma(5,4,(dato)=>{
 console.log("la suma es "+dato);
},(dato)=>{
    console.log("La suma por dos es: "+dato*2);
}

);