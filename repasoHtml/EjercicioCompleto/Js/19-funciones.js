'use strict'

//Funciones
/** conjunnto de ordenes que se puede reutilizar a lo largo de la ejecucion y se ejecutan al recibir el llamado */

// asi se declara una funcion sencilla, sin parametros
function saludo(){
    console.log ("Hola soy la calculadora");
    console.log ("hola si soy yo");

    //cuando la funcion cuenta con una sentencia de return, la manera de obtener la informacion es asignando a una variable la declaracion de la funcion

    return "Hola desde la parte que retorna";
}

//asi se invoca a lla funcion
saludo();

let variableRetorn = saludo();

console.log(`desde la variable retorna ${variableRetorn}`);

/** FunCIONES Con PARAMETROS */

function calculadora (numero1, numero2){

    console.log(`Suma: ${(numero1+numero2)}`);
    console.log(`Resta: ${(numero1-numero2)}`);
    console.log(`Multiplicacion: ${(numero1*numero2)}`);
    console.log(`Division: ${(numero1/numero2)}`);
    console.log("****************************************");

}

//invocar y llamar la funcion en un ciclo
for(let i = 1; i < 10; i++){
    console.log(i);
    calculadora(i,8);
}

