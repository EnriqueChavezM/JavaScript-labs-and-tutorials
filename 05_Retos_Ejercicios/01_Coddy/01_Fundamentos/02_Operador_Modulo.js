/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Escribe un código que inicialice tres variables, a, b y c con los valores 9, 2.6 y 11 (respectivamente).
 * ├─ Después, inicializa las siguientes variables:
 * │    ├─ d que contendrá el resultado de a módulo 2 
 * │    ├─ e que contendrá el resultado de a módulo 3
 * │    └─ f que contendrá el resultado de c módulo 10
 * └─ Comprueba el resultado y observa cómo los distintos dividendos y divisores afectan al resultado.
 * 
**************************************************************************************************/
/* Variables */
let a = 9;
let b = 2.6;
let c = 11;
let d = b % 2;
let e = a % 3;
let f = c % 10;

/* Imprimir resultados */
console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)
console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`f = ${f}`)