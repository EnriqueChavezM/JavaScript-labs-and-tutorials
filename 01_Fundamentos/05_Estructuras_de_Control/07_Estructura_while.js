/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un programa que obtenga una entrada, un número float.
 * ├─ Usa un bucle while para dividir la entrada entre 2 mientras el número sea mayor o igual que 3.5.
 * └─ Imprime el primer número que sea menor que 3.5.
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

  // Estructura while
  while(number > 3.5){
  number /= 2;
}
console.log(number)

// 3. Cerrar la consola
rl.close();
});
