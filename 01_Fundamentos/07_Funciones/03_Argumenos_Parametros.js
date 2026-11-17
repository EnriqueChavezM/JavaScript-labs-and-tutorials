/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un programa que reciba dos números como entradas. Los números de entrada son los parámetros de la función. 
 * ├─ Crea una función que reciba dos parámetros, los multiplique (calcule el producto) e imprima el resultado.
 * └─ Llama a la función con los números de entrada.
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
function multiplica (a, b){
  let result = a * b;
  console.log(`A x B = ${result}`);
}

// 2. Pedir un dato al usuario
rl.question('Ingresa el primer número: ', (A) => {
    rl.question('Ingresa el segundo número: ', (B) => {
        
        // Variables
        let a = parseInt(A);
        let b = parseInt(B);
        
        // llamar función
        multiplica(a, b);
        
        // 3. Cerrar la consola
        rl.close();
    });
});
