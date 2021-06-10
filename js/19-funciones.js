function calculadora(numero1,numero2,operacion="suma"){
    let resultado=0;
    if(operacion =="suma"){
        resultado= numero1+numero2;
    }else if(operacion == "resta"){
        resultado= numero1-numero2;
    }else if(operacion == "multiplicacion"){
        resultado= numero1*numero2;
    }else if(operacion == "division"){
        resultado= numero1/numero2;
    }
    return resultado
}

console.log("El resultado de la operacion es: "+calculadora(6,3));
console.log("El resultado de la operacion es: "+calculadora(10,3,));
console.log("El resultado de la operacion es: "+calculadora(6,3,"multiplicacion"));
console.log("El resultado de la operacion es: "+calculadora(6,3,"division"));