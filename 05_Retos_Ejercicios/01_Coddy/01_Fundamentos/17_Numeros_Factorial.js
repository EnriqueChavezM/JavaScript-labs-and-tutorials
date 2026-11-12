/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ El Factorial es una operación matemática. El factorial de n es el producto de todos los números enteros positivos menores o iguales a n. 
 * ├─ Por ejemplo:
 * │    ├─ El factorial de 3 es 6, que se puede calcular como 1 * 2 * 3
 * │    ├─ El factorial de 6 es 720, que se puede calcular como 1 * 2 * 3 * 4 * 5 * 6
 * │    └─ El factorial de 2 es 2, que se puede calcular como 1 * 2
 * ├─ Escribe un programa que reciba una entrada (given), un número entero, calcule el factorial de la entrada y lo imprima.
 * └─ Por ejemplo, para la entrada 5, la salida debería ser 120 porque 1 * 2 * 3 * 4  * 5 = 120.
 *  
**************************************************************************************************/
// 0. Importar modulo nativo de Node.js readline para poder leer
const readline = require('readline');

// 1. Crear la interfaz para leer la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
// 2. Pedir un dato al usuario
rl.question('Ingresa un número n: ', (number) => {
    
    // Variables
    let n = parseInt(number);
    let result = 1;
    
    // Bucle
    for (let i = 1; i <= n; i++){
        result *= i;
    }

    // Imprimir resultando
    console.log(result);
    
    // 3. Cerrar la consola
    rl.close();
});
