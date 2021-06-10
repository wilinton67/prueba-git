var nombre=prompt("mete tu nombre");
var apellido=prompt("mete tu apellido");

var nombre_completo=`
<h1>Hola que tal</h1>
<h2>Mi nombre es ${nombre}</h2>
<h2>Mi apellido es ${apellido}</h2>`;


document.write(nombre_completo);