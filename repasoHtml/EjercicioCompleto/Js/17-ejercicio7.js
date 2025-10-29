'use strict'

/** mostrar la tabla de multiplicar de un numero ingresado por pantalla */


let numero = parseInt(prompt("Ingresa el numero "));

for (let i = 1; i <= 10; i++){

    console.log( numero+" * "+i+" = " +(numero*i));
}