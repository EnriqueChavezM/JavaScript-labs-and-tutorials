/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Escribe un código que recibe dos números n1 y n2 y un carácter op (proporcionado).
 * ├─ Los valores posibles para op son '+', '-', '/' y '*'
 * └─ Tu tarea es asignar a la variable result un valor basándote en las condiciones:
 *      ├─ si op es '+', asigna a result el valor n1 + n2.
 *      ├─ si op es '-', asigna a result el valor n1 - n2.
 *      ├─ si op es '/', asigna a result el valor n1 / n2.
 *      └─ si op es '*', asigna a result el valor n1 * n2.
 * 
**************************************************************************************************/
// Variables
let n1 = 10 
let n2 = 2 
let op = '*'
let result = 0

// Estructura de Control
if (op == '+') {result = n1 + n2;}
else if (op == '-') {result = n1 - n2;}
else if (op == '/') {result = n1 / n2;}
else if (op == '*') {result = n1 * n2;}
else {result = "Error";}

// Imprimir Resultado
console.log(`result = ${result}`)