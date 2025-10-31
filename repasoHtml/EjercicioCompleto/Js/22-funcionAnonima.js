'use strict'

/**Funciones callbak o anonimas
 * son funciones que no tienen nombres, se asignan a una variable
 */

const pelicula = function (nombre){
    return `la pelicula es ${nombre}`;

}

console.log(pelicula("triste"));