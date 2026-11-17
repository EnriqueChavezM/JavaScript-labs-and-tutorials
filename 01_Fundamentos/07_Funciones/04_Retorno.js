/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Crea una función llamada "square" que reciba un único parámetro n y devuelva su cuadrado. 
 * ├─ Luego, llama a la función con el valor de entrada (proporcionado) y guarda el resultado en una variable llamada result. 
 * └─ Finalmente, imprime el valor de result.
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
function square (n){
  return n * n;
}

// 2. Pedir un dato al usuario
rl.question('Ingresa un número: ', (n) => {
        
    // Variables
    let num = parseInt(n);
        
    // Llamar función
    let result = square(num);

    // Imprimir result
    console.log(`El cuadrado de ${num} es ${result}`);
        
    // 3. Cerrar la consola
    rl.close();

});
