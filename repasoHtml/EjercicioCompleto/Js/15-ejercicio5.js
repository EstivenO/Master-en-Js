'use strict'

/**Mostrar todos los numeros divisores de un numero introducido por pantalla */

let numero = parseInt(prompt("Ingresa el numero que deseas validar sus divisores",0));

for(let i = 1; i <= numero; i++){

    if( numero % i == 0 ){
        console.log("Divisor "+i);
    }
    

}