'use strict'

/**EJERCICIO 1 SPREAD */
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray);


const animales =["perro", "gato", "raton"];
const nombres = ["siggy", "floky","nara","kasper"]

const mascotasCombinadas = ["diana", "paula", ...animales,"loro", ...nombres, "miky"];

console.log(mascotasCombinadas);
console.log("*****************************");
console.log(animales);