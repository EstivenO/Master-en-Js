'use strict'


/**
 * utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir
 * un numero negativo y ahi mostrar el resultado
 */

let suma = 0
let contador = 0;

do{
    var numero = parseInt(prompt("ingresa el numero: ",0))

    if(isNaN(numero)){
        numero = 0;
    }else if (numero >= 0){
        suma += numero;
        contador++;

    }
}while(numero >= 0);

alert(" la suma de los numeros es: "+suma);
alert(" la media de los numeros que introdujiste es: "+(suma/contador));





