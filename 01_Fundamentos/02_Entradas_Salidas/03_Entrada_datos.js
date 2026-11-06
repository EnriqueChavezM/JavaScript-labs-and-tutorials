/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un programa que reciba el nombre del usuario, la edad y país
 * └─ Imprime el resultado con el siguiente formato     
 *      ├─ --- RESUMEN DE TUS DATOS ---
 *      ├─ Nombre: Enrique
 *      ├─ Edad: 31 años
 *      └─ País: Mexico
 * 
**************************************************************************************************/
// Importar módulo nativo llamado readline para poder leer entradas
const readline = require('readline');

// Configuramos la interfaz de lectura y escritura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Primera pregunta: 
rl.question('¿Cómo te llamas? ', (nombre) => {
    
    // Segunda pregunta: 
    rl.question('¿Cuántos años tienes? ', (edad) => {
        
        // Tercera pregunta: 
        rl.question('¿De que país eres? ', (pais) => {
            
            // --- SALIDA FINAL ---
            console.log("\n--- RESUMEN DE TUS DATOS ---");
            console.log(`Nombre: ${nombre}`);
            console.log(`Edad: ${edad} años`);
            console.log(`País: ${pais}`);
            
            // ¡MUY IMPORTANTE! El rl.close() va al final de todo, 
            // cuando ya no esperas más entradas del usuario.
            rl.close();
        });
    });
});