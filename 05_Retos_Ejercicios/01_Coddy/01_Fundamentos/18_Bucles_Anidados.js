/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Escribe un programa que encuentre todos los pares de factores de n usando números desde 1 hasta n.
 * ├─ Por ejemplo, si n = 12, la salida debería ser:
 * │    ├─ 1 12
 * │    ├─ 2 6
 * │    ├─ 3 4
 * │    ├─ 4 3
 * │    ├─ 6 2
 * │    └─ 12 1
 * └─ Porque:
 *      ├─ 1 * 12 = 12
 *      ├─ 2 * 6 = 12
 *      ├─ 3 * 4 = 12
 *      ├─ 4 * 3 = 12
 *      ├─ 6 * 2 = 12
 *      └─ 12 * 1 = 12
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
    for (let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++)
            if(i * j == n){
                console.log(i, j);
                break;
            }
    }   

    // 3. Cerrar la consola
    rl.close();
});
