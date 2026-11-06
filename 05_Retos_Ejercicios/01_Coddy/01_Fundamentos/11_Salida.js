/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Crea una variable name con el valor "Alice".
 * ├─ Crea una variable age con el valor 30.
 * └─ Usa console.log() para mostrar:
 *      ├─ El valor de name.
 *      ├─ El valor de age.
 *      └─ Los números 10 y 20 separados por un espacio.
 * 
**************************************************************************************************/
/*
// Variables
let name = "Alice";
let age = 30;

// imprimir en consola
console.log(name);
console.log(age);
console.log(10, 20);
*/
/**************************************************************************************************
 * 
 * Desafío 2:
 * ├─ Se te proporciona un código que almacena un número aleatorio como entrada en una variable llamada rnd.
 * ├─ Imprime "The input is: " seguido del valor de rnd.
 * └─ Imprime:
 *      ├─ "The number is even." si rnd es par.
 *      ├─ "The number is odd." si rnd es impar.
 * 
**************************************************************************************************/
// Variable
let rnd = 2;

// Imprimir 
console.log(`The input is: ${rnd}`);

// Condicional
if (rnd % 2 == 0){ console.log("The number is even."); }
else {console.log("The number is odd.");}