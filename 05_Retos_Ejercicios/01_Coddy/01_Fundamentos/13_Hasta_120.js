/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Escribe un programa que obtenga la edad del usuario como entrada.
 * ├─ El programa mostrará el número de años que faltan hasta 120.
 * └─ Por ejemplo, para la entrada 25, la salida esperada es "95 years till 120".
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
rl.question('Ingrese su edad: ', (edad) => {
  // Aquí usas el dato recibido
  console.log(`${120 - Number(edad)} years till 120`);

// 3. Cerrar la consola
rl.close();
});
