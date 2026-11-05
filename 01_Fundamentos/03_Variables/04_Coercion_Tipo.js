/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un script que inicialice varias variables de diferentes tipos.
 * └─ Realiza la coerción de tipos e imprimir los resultados:
 *      ├─ Convierte el número "num" a una cadena y almacénalo en una variable llamada "a".
 *      ├─ Convierte el booleano "bool" a un número y almacénalo en una variable llamada "b".
 *      ├─ Convierte la cadena "str" a un número y almacénalo en una variable llamada "c".
 *      ├─ Realiza una coerción de tipo implícita concatenando "num" con "str" y almacena el resultado en una variable llamada "d".
 *      └─ Usa funciones de coerción de tipos explícitas (String(), Number()) para las tres primeras tareas y observa la coerción implícita en la última tarea. 
 *  
**************************************************************************************************/
// Variables
let num = 42
let bool = false
let str = "7"

// Coerción de tipos
let a = String(num);
let b = Number(bool);
let c = Number(str);
let d = num + str;

// Imprimir Resultados
console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)
console.log(`d = ${d}`)