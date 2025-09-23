'use strict'

//Condicionales, es una serie de pasos para evaluar opciones o condiciones para comparar 

let edad1 = 35;
let edad2 = 12;

/** Operadores relacionales
 * mayor: >
 * menor: <
 * mayor o igual: >=
 * menor o igual: <=
 * diferente: !=
 * igual: ==
 * igual con tipo: ===
 */

/**
 * AND (Y): &&
 * OR (O): ||
 * NEGACION: !
 */

if(edad1 > edad2){
    alert(`eres ${edad1} mucho mayor que la ${edad2} `);
}else{
    alert(`${edad2} es menor que el de ${edad1}`);
}


let ano = 2025;

if ( ano == 2025 && ano <= 2027){
    console.log(`el año en el que estamos es ${ano}`);
}