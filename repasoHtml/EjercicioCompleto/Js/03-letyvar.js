'use strict'

// las variables declaradas con la palabra reservada (var ) se consideran de ambito global, eso quiere decir que si el valor cambia en cualquier instancia del programa, dicha variable obtiene dicho valor

//Prueba con Var
var numero = 40; // valor 40

if(true){

    var numero = 50;
    console.log("Prueba con Var" + numero); // valor 50
}

    console.log("Prueba con Var" + numero); // valor 50


// Prueba con Let 

var numero1 = 20;
console.log("Prubbas con Var " +numero1); // variable global

if(true){
    let numero1 = 35;
    console.log("Pruebas con let " +numero1); // variable local
}

console.log("pruebas con var" +numero1); // variable global



