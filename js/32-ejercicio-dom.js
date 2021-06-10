'use strict'

window.addEventListener('load',function(){
var formulario= document.querySelector('#formulario');
var box_dashed=document.querySelector('.dashed');
box_dashed.style.display='none';


formulario.addEventListener('submit',()=>{
    console.log('evento submit capturado')

    var nombre=document.querySelector("#nombre").value;
    var apellidos=document.querySelector("#apellidos").value;
    var edad=parseInt(document.querySelector("#edad").value);
    
    if(nombre.trim() == null || nombre.trim().length==0){
        var error_nombre= document.querySelector('#error_nombre');
        error_nombre.innerHTML='nombre no es valido'
        error_nombre.style.color='red';
        return false
    }
    
    if(apellidos.trim() ==null || apellidos.trim().length==0){
        var error_apellidos= document.querySelector('#error_apellidos');
        error_apellidos.innerHTML='apellidos no son validos'
        error_apellidos.style.color='red';
        return false
    }

if(edad ==null || edad<=0 || isNaN(edad)){
    var error_edad= document.querySelector('#error_edad');
    error_edad.innerHTML='edad no es valida'
    error_edad.style.color='red';
    return false
}
    box_dashed.style.display='block';

    var p_nombre=document.querySelector('#p_nombre span');
    var p_apellidos=document.querySelector('#p_apellidos span');
    var p_edad=document.querySelector('#p_edad span');

    p_nombre.innerHTML=nombre;
    p_apellidos.innerHTML= apellidos;
    p_edad.innerHTML=edad;

        


})

});