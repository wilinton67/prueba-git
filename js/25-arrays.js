'use strict'

var lenguajes=["Java", "PHP", "Javascript", "Python"];

for (let index = 0; index < lenguajes.length; index++) {
     document.write(lenguajes[index] + "<br/>");
    
}
document.write("<ul>");
lenguajes.forEach((elemento, index, data)=>{
    document.write("<li>"+ elemento + "</li>");
});
document.write("</ul>");