'use strict'

/**Funciones con parametros opcionales */


function calculadora (numero1, numero2, mostrar = false){

    if(mostrar === false) {

        console.log(`Suma: ${(numero1+numero2)}`);
        console.log(`Resta: ${(numero1-numero2)}`);
        console.log(`Multiplicacion: ${(numero1*numero2)}`);
        console.log(`Division: ${(numero1/numero2)}`);
        console.log("****************************************");

    }else{
        document.writeln(`Suma: ${(numero1+numero2)} <br/>`);
        document.writeln(`Resta: ${(numero1-numero2)} <br/>`);
        document.writeln(`Multiplicacion: ${(numero1*numero2)} <br/>`);
        document.writeln(`Division: ${(numero1/numero2)} <br/>`);
        document.writeln("**************************************** <br/>");
    }
}

//calculadora(10,20);
calculadora(10,20, true);