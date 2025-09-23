'use strict '

// el switch: sirve para remplazar los if anidados con condiciones especificas

let vocal = "a";

switch (vocal) {
    case "a":
        console.log("salio la A");
    break;
    case "e":
        console.log("salio la E");
    break;
    case "i":
        console.log("salio la I");
    break;
    default:
        console.log("no seleccionaste vocal");
    break;
}