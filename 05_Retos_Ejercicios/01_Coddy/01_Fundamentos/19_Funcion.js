/**************************************************************************************************
 * 
 * Desafío 1:
 * └─ Escribe una función "findMax" que tome tres argumentos, los compare y devuelva el número más grande.
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
function findMax(a,b,c){
    if (a >= b){
        if (a >= c) {return a;}
        else {return c}
    }
    else {
        if (b >= c) {return b;}
        else {return c;}
    }
}
  
// 2. Pedir un dato al usuario
rl.question('Ingresa el primer número: ', (A) => {
    rl.question('Ingresa el segundo número: ', (B) => {
        rl.question('Ingresa el tercer número: ', (C) => {
            
            // Variables
            let a = parseInt(A);
            let b = parseInt(B);
            let c = parseInt(C);
            
            // Imprimir resultado
            console.log(`El número más grande es: ${findMax(a,b,c)}`)

            // 3. Cerrar la consola
            rl.close();

        });
    });
});
