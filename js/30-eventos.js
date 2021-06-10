'use strict'
//EVENTO LOAD HACE QUE CARGUE LA PAGINA ANTES DE EJECUTAR EL JAVASCRIPT
window.addEventListener('load',()=>{
//EVENTOS DEL RATON
var boton= document.querySelector('#boton');
boton.addEventListener('mouseout',()=>{
    boton.style.background ='red';
    boton.style.width="50px";
    boton.innerHTML = "rojo"
    return true;
})
boton.addEventListener('mouseover',()=>{   
boton.style.background ='green';
    boton.style.width="250px";
    boton.innerHTML = "verde"
    return true;    
})
var contador =0;
boton.addEventListener('click',()=>{
    contador+=1;
    console.log(`se ha dado click ${contador} veces`)

})
//EVENTOS TECLADO

var teclado= document.querySelector('#campo_nombre');

teclado.addEventListener('focus',()=>{
    console.log('estas dentro del input')
    });

teclado.addEventListener('blur',()=>{
    console.log('estas afuera del input');
})

teclado.addEventListener('keydown',()=>{
    console.log('pulsando');
})
teclado.addEventListener('keypress',()=>{
    console.log('press');
})
teclado.addEventListener('keyup',()=>{
    console.log('suelto');
})
})
