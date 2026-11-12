/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un programa que imprima un rectángulo de asteriscos (*) con un ancho y una altura determinados.
 * ├─ Entradas: Dos enteros: width y height.
 * └─ Por ejemplo:
 *      ├─ Si width = 5 y height = 3, la salida debería ser:
 *      ├─ *****
 *      ├─ *****
 *      └─ *****
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
// Ancho
rl.question('Ingresa el ancho: ', (ancho) => {
    // Alto
    rl.question('Ingresa el alto: ', (alto) => {
        
        // Variables
        let width = parseInt(ancho);
        let height = parseInt(alto);

        for (i = 0; i < height; i++){
            let col = ""
            for (j = 0; j < width; j++){
                col += '*';
            }
            console.log(col)
        }

        // 3. Cerrar la consola
        rl.close();
    });
});
