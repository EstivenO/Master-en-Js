'use strict'

/**Parametros rest y spread  */

// este es el operador rest; el cual sirve para captuar parametros indefinidos y los almacena en un tipo de campo array 
function frutas(fruta1,fruta2, ...restoFrutas){

    console.log(`fruta 1: ${fruta1}`);
    console.log(`fruta 2: ${fruta2}`);
    console.log(`resto de frutas: ${restoFrutas}`);
    console.log("*********************************")
    console.log( restoFrutas.constructor.name);
}

frutas("Mango","pera","sandia","naranja","mora");

// operador Spread; este operador transforma o divide un elemento de tipo array, en elementos individuales de acuerdo a los parametros solicitados en la funcion
var arrayFrutas = ["sandia","naranja","mora","Mango","pera"];

frutas(...arrayFrutas);