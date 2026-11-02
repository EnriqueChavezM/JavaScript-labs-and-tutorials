/**************************************************************************************************
 * 
 * Ejemplo Operadores Lógicos
 * Escribe un script que inicialice 2 variables b1 y b2 con los valores True y False (respectivamente).
 *  Después de eso, inicializa otras variables con &&, || y ! 
 *  
**************************************************************************************************/
// Variables
let b1 = true;
let b2 = false;

// Operaciones
let b3 = b1 && b2;
let b4 = b1 || b2;
let b5 =  !b1;
let b6 =  !b2;
let b7 = b1 && !b2;
let b8 = !b1 || b2;
    
// Imprimir resultados
console.log(`b1 = ${b1}`);
console.log(`b2 = ${b2}`);
console.log(`b1 && b2 = ${b3}`);
console.log(`b1 || b2 = ${b4}`);
console.log(`!b1 = ${b5}`);
console.log(`!b2 = ${b6}`);
console.log(`b1 && !b2 = ${b7}`);
console.log(`!b1 || b2 = ${b8}`);
    