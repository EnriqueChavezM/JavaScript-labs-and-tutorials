/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Escribe una función llamada "sigma" con un argumento que represente el número "n".
 * ├─ La función devolverá la suma de todos los números desde 1 hasta n (incluido).
 * └─ Por ejemplo, para sigma(5), la función devolverá 15, porque 15 = 1 + 2 + 3 + 4 + 5.
 *  
**************************************************************************************************/
// 0. Importar modulo nativo de Node.js readline para poder leer
const readline = require('readline');

// 1. Crear la interfaz para leer la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//1.1 Función
function sigma(n){
    let result = 0;
    for (let i = 1; i <= n; i++){
        result += i;
    }
    return result;
}
  
// 2. Pedir un dato al usuario
rl.question('Ingresa un número n: ', (number) => {
    
    // Variables
    let n = parseInt(number);
   
    // LLamar función
    console.log(`Sigma de ${n} = ${sigma(n)}`);

    // 3. Cerrar la consola
    rl.close();
});