/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Lee un entero n. 
 * └─ Usa un bucle for para imprimir "Hello: " y el valor de i para cada número del 3 al n, ambos incluidos.
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
rl.question('Ingresa un número n: ', (n) => {

  // Estructura For
  for (let i = 3; i <= n; i++){
    console.log(`Hello Coddy: ${i}`);
  }

// 3. Cerrar la consola
rl.close();
});
