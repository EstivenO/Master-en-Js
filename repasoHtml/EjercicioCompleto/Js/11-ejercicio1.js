'use strict'

// hacer un programa que pida dos numeros, que nos diga cual es el mayor el menor o si son iguales;
// PLUS: Si los numeros no son un numero o son menores o iguales a cero, no los vuelva a pedir.

let numero1 = parseInt(prompt("regalame el primer numero",0));
let numero2 = parseInt(prompt("regalame el segundo numero",0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("regalame el primer numero",0));
    numero2 = parseInt(prompt("regalame el segundo numero",0));
}

if (numero1 == numero2){
    alert("LOS NUMEROS SON IGUALES");
}else if(numero1 > numero2 ){
    alert(`el numero ${numero1} es Mayor; el numero ${numero2} es Menor`);
}else if(numero2 > numero1){
    alert(`El numero ${numero2} es Mayor; el numero ${numero1} es Menor `);
}else{
    alert("Introduce numeros adecuados");
}
