/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Se te proporciona un código con tres variables: a, b y c.
 * ├─ Tu tarea es realizar las siguientes comparaciones y mostrar los resultados:
 * │    ├─ Comprueba si a es vagamente igual a b y guarda el resultado en d.
 * │    ├─ Comprueba si a es estrictamente igual a c y guarda el resultado en e.
 * │    ├─ Comprueba si b es vagamente no igual a c y guarda el resultado en f.
 * │    └─ Comprueba si a es estrictamente no igual a b y guarda el resultado en g.
 * └─ Utiliza las variables dadas y los operadores de comparación para completar la tarea.
 * 
**************************************************************************************************/
// Variables dadas
let a = 10
let b = "10"
let c = true

// Escribe tu código debajo
let d = a == b;
let e = a === c;
let f = b != c;
let g = a !== b;

// No cambies la línea de abajo
console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`f = ${f}`)
console.log(`g = ${g}`)