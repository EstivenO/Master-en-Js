'use strict'

/**Mostrar los numeros impares que existen entre dos numeros pedidos por pantalla */

let numero1 = parseInt(prompt("ingresa el numero de inicio de la busqueda",0));
let numero2 = parseInt(prompt("ingrese el numero hasta donde deseas realizar la busqueda",0));

for( let i = numero1; i <= numero2; i++){
    if(i % 2 != 0 ){
        document.writeln("el numero "+i+" es impar </br>");
    }
}