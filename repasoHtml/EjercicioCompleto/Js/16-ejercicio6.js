'use strict'

/**Que nos diga si un numero es par o impar */

do{
    var numero = parseInt(prompt("ingrese el numero"));

    if(numero % 2 == 0 ){
        console.log("El numero "+numero+ " es Par");
    }else{
        console.log("el numero "+numero+" es impar");
    }
}while(numero != 0)