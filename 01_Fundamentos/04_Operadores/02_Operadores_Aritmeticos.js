/***********************************************************************
 * 
 * Ejemplo 1:
 *  ├─ Escribe un código que inicialice dos variables, a y b, con los valores 5.2 y 2.6 (respectivamente).
 *  └─ Después de eso, inicializa otra variables que contendrá el resultado
 *      ├─ a + b.
 *      ├─ a - b.
 *      ├─ a * b.
 *      ├─ a / b.
 *      ├─ a % b.
 *      ├─ a ** b.
 *      ├─ a ++.
 *      └─ b --.
 * 
***********************************************************************/
/* Variables */
let a = 5;
let b = 2;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a % b;
let h = a ** b;
let i = a++;
let j = b--;

/* Imprimar resultados */
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a + b = ${c}`);
console.log(`a - b = ${d}`);
console.log(`a * b = ${e}`);
console.log(`a / b = ${f}`);
console.log(`a % b = ${g}`);
console.log(`a ** b = ${h}`);
console.log(`a++ = ${i}`);
console.log(`b-- = ${j}`);