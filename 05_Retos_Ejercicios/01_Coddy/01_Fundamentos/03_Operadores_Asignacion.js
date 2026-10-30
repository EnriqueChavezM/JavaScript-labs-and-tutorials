/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Escribe un código que inicialice una variable (balance) en 0
 * ├─ Realizar las siguientes operaciones, en este orden:
 * │    ├─ Agregar 100 a balance
 * │    ├─ Aumentar balance en un 10%
 * │    └─ Restar 50 de balance
 * └─ Imprime el resultado
 * 
**************************************************************************************************/
/* Variable */
let balance = 0;

/* Operaciones */
balance += 100;
balance += (balance * 0.1);
balance -= 50;

/* Imprimir Resultado */
console.log(balance);