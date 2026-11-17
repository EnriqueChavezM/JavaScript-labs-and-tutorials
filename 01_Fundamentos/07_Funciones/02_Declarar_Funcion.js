/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un programa que reciba una entrada, un número (proporcionado). 
 * ├─ El número de entrada indica cuántas veces ejecutar la función siguiente. 
 * └─ Crea una función que calcule la suma de todos los números entre 1 y 10000 (inclusive) y la imprima.
 * 
**************************************************************************************************/
// 0. Importar modulo nativo de Node.js readline para poder leer
const readline = require('readline');

// 1. Crear la interfaz para leer la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1.1 Función
function suma(){
let suma = 0;
  for (let i = 1; i <= 10000; i++){
    suma += i
}
console.log(suma);
}

// 2. Pedir un dato al usuario
rl.question('Ingresa un número n: ', (number) => {
    
    // Variables
    let n = parseInt(number);

    // Ejecuta tu función n veces con un bucle
    for (let i = 0; i < n; i++){
        suma();
    } 

    // 3. Cerrar la consola
    rl.close();
});
