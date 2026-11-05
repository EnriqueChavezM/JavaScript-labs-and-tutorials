/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un script que inicialice 3 variables a, b y c
 * ├─ Inicializa c = 0
 * ├─ Necesitas asignar valores enteros a las variables a y b para que el if se evalúe como 'true' en la expresión: 
 * │    └─ if (a >= b && !(b < 10))
 * ├─ Cuando el if sea true c = 2
 * ├─ Al salir de la sentencia suma 1 a c 
 * └─ Imprime el resultado (3)
 *  
**************************************************************************************************/
// Variables
let a = 16;
let b = 11;
let c = 0;

// Estructura IF
if (a >= b && !(b < 10)) {
    c = 2;
}

// Operación
c += 1;

// Imprimir resultado
console.log(`c = ${c}`);