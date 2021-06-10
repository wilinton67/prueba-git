'use strict'

var categorias=["accion", "terror", "comedias"];

var peliculas=["La verdad duele","La vida es bella", "Gran torino"];

var cine=[peliculas,categorias];

peliculas.push("Batman");
console.log(peliculas)

peliculas.push(prompt("agregar nuevo elemento a el array de peliculas"));