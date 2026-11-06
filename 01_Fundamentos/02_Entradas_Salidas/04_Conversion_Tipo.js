/**************************************************************************************************
 * 
 * Ejemplo 1.
 * └─ Dados dos strings var1 y var2.
 *      └─ Conviértelos a un float e imprime la multiplicación de ambos.
 * 
**************************************************************************************************/
const readline = require('readline');

// Configuramos la interfaz de lectura y escritura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Primer Entrada
rl.question("Ingresa el primer numero: ", (var1) => {

// Segunda Entrada 
    rl.question("Ingresa el segundo numero: ", (var2) => {

        // Conversion de Tipo y Operaciones 
        let result = parseFloat(var1) * parseFloat(var2);

        // SALIDA FINAL
        console.log(result);
        rl.close();
    });
});