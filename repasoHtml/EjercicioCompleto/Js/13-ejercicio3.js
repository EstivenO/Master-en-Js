'use strict'

/**
 * HACER UN PROGRAMA QUE MUESTRE TODOS LOS NUMEROS QUE HAY ENTRE 2 NUMEROS INTRODUCIDOS POR EL USUARIO
 * 
 */

let numero1 = parseInt(prompt("ingresa el numero del cual quieres arrancar el conteo", 0));
let numero2 = parseInt(prompt("ingresa el numero hasta donde quieres contar", 0));

document.writeln("<h1> del numero "+numero1+" a numero "+numero2+" estan:</h1>")
for (let i = numero1; i <= numero2; i++){
    document.writeln(i +"<br/>");
}