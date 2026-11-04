/***********************************************************************
 * 
 * Ejemplo 1:
 * ├─ Escribe un código que inicialice una variable (count) en 0
 * ├─ Realizar las siguientes operaciones, en este orden:
 * │    ├─ Suma 4 a count
 * │    ├─ Multiplica count por 2
 * │    └─ Resta 1 de count
 * └─ Imprime el resultado
 * 
***********************************************************************/
/* Variable */
let count = 0;

/* Operación */
count += 4;
count *= 2;
count -= 1;

/* Imprimir */
console.log(`count = ${count}`)