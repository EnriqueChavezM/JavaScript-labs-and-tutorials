/**************************************************************************************************
 * 
 * Desafío 1:
 * └─ Se te proporciona un código; reemplaza los signos de interrogación de las variables b1 y b2 para que b3 evalúe como true.
 * 
**************************************************************************************************/
// Escribe tu código a continuación
let b1 = 2;
let b2 = 5;
let x = 8;
let y = -1;
let B1 = !false;
let B2 = !false;
let B3 = !true;

let b3 = !((b1 + b2) > (b1 * b2));
let z = ((x * y) < (x + y) && (x + y) < (x - y));
let B4 = B1 && B2 && (!B3)

// No cambies la línea de abajo
console.log(`b3 = ${b3}`)
console.log(`z = ${z}`)
console.log(`b4 = ${B4}`)