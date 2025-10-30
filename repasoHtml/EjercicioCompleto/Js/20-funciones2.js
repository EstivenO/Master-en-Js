'use strict'

/**Funciones con parametros opcionales */

function porConsola (numero1,numero2){
    console.log(`Suma: ${(numero1+numero2)}`);
    console.log(`Resta: ${(numero1-numero2)}`);
    console.log(`Multiplicacion: ${(numero1*numero2)}`);
    console.log(`Division: ${(numero1/numero2)}`);
    console.log("****************************************");
}

function porPantalla (numero1,numero2){
    document.writeln(`Suma: ${(numero1+numero2)} <br/>`);
    document.writeln(`Resta: ${(numero1-numero2)} <br/>`);
    document.writeln(`Multiplicacion: ${(numero1*numero2)} <br/>`);
    document.writeln(`Division: ${(numero1/numero2)} <br/>`);
    document.writeln("**************************************** <br/>");
}

function despedida(){
    console.log("esta es la despedida del ejercicio de anidacion de funciones");
}

function calculadora (numero1, numero2, mostrar = false){

    if(mostrar === false) {
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }

    despedida();
}

//calculadora(10,20);
calculadora(10,20, true);