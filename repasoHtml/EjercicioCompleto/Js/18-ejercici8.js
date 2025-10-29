'use strict'


/**Calculadora
 * que pida 2 numeros por pantalla
 * si pones un numero malo que lo vuelva a pedir
 * en el cuerpo de la pagina, en una alert y por consola mostrar el resultado
 */

let numero1 = parseInt(prompt("ingrese el numero para realizar la operacion", 0));
let numero2 = parseInt(prompt("Ingrese el segundo numero para realizar la operacion", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("ingresa el numero del cual quieres arrancar el conteo", 0));
    numero2 = parseInt(prompt("ingresa el numero hasta donde quieres contar", 0));    
}

var resultado = "La suma es : "+(numero1+numero2)+"<br/>"+
                "La resta es : "+(numero1 -numero2)+"<br/>"+
                "La Multiplicacion es : "+(numero1*numero2)+"<br/>"+
                "La division es : "+(numero1/numero2)+"<br/>";

var resultadoCmd = "La suma es : "+(numero1+numero2)+"\n"+
                "La resta es : "+(numero1 -numero2)+"\n"+
                "La Multiplicacion es : "+(numero1*numero2)+"\n"+
                "La division es : "+(numero1/numero2)+"\n";

document.writeln(resultado);
alert(resultadoCmd);
console.log(resultadoCmd)
