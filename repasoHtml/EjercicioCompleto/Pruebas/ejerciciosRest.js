'use strict'

/**EJERCICIO 1 REST */
// function sumar (...numeros){
//     let total = 0;
//     for(let n of numeros){
//         total+=n;
//     }
//     return total;
// } 

// let resultado = sumar(1,2,3,4);
// console.log(resultado);

// let sumaGrande = sumar(20,50,80,100);
// console.log(sumaGrande);

//**EJERCICIO 2 REST */
// function mostrarValores(...numeros){
//     console.log(`el tipo de dato en el cual recibe el operador rest es: ${numeros.constructor.name}`);
//     console.log(`el valor que se almacena en dcha variable es ${numeros}`);
//     console.log("***********************************************");
//     for (let n of numeros){
//         console.log(n);
//     }
// }

// mostrarValores(1,5,8,3,4);

/**EJERCICIO 3 REST */
// function concatenarCadenas(...cadenas){
//     let cadena = "";
//     for (let palabra of cadenas){
//         cadena+= palabra+" ";
//     }
//     return cadena.trim();
// }

// var prueba = concatenarCadenas("Hola", "Mundo", "desde", "JavaScript"); // "Hola Mundo desde JavaScript"
// console.log(prueba)

// function concatenarCadenas(...cadenas) {
//     return cadenas.join(" ");
// }

/** EJERCICIO 4 REST */

function filtrarMayores(umbral,...numeros){
    let mayores = [];
    for (let numero of numeros){
        if(typeof numero === 'number' && numero > umbral){
            mayores.push(numero);
        }
    }
    return mayores;
}

console.log(filtrarMayores(10, 1, 5, 13, 15)); // Debería retornar [13, 15]