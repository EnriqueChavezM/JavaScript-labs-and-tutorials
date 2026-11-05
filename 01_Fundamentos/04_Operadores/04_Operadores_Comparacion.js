/***********************************************************************
 * 
 * Ejemplo 1:
 * ├─ Escribe un script que inicialice 2 variables n1 y n2 con los valores 8 y 9 (respectivamente).
 * ├─ Después de eso, inicializa otra variable n3 que contendrá si n1 es mayor que n2.
 * └─ Imprime el resultado
 * 
***********************************************************************/
/* Variable */
let n1 = 8;
let n2 = 9.0;

/* Operador de Comparación */
let n3 = n1 > n2;
let n4 = n1 < n2;
let n5 = n1 == n2;
let n6 = n1 === n2;
let n7 = n1 != n2;
let n8 = n1 !== n2;

/* Imprimir resultado */
console.log(`n1 = ${n1}, n2 = ${n2}`);
console.log(`n1 > n2 = ${n3}`);
console.log(`n1 < n2 = ${n4}`);
console.log(`n1 == n2 = ${n5}`);
console.log(`n1 === n2 = ${n6}`);
console.log(`n1 != n2 = ${n7}`);
console.log(`n1 !== n2 = ${n8}`);