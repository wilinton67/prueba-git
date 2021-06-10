'use strict'

var numeros = [];
var contador = 0;
do {
    let numero = prompt("ingrese el numero que quiere en el array");
    numeros[contador] = numero;
    contador++;
} while (numeros.length <= 5)


console.log(numeros);

var buscar_numero= prompt("que quiere buscar")
var buscar=numeros.findIndex((numero)=>{
        return numero == buscar_numero;
});


if(buscar>-1){
    document.write("<h2>Encontrar un elemento</h2>");
    document.write("indice: "+buscar+", Elemento: "+numeros[buscar]);
}


function recorrerNumeros(array) {
    array.forEach(elemento => {
        document.write("<ul>");
        document.write("<li>" + elemento + "</li>");
        document.write("</ul>");
    })
}


document.write("<h2>Array de numeros</h2>");

recorrerNumeros(numeros);

document.write("<h2>Array de numeros ordenado</h2>");

numeros.sort()
recorrerNumeros(numeros);

document.write("<h2>Array de numeros invertido</h2>");

numeros.reverse()
recorrerNumeros(numeros);

document.write("<h2>numero de elementos de un array</h2>");
document.write(numeros.length);


