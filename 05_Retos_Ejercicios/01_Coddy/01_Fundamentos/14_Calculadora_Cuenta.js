/**************************************************************************************************
 * 
 * Desafío 1:
 * └─ En este proyecto, crearás un programa sencillo que calcula cuánto debe pagar cada persona, incluyendo la propina.
 *      ├─ Todo buen programa comienza con un mensaje de bienvenida, muestra en pantalla la siguiente cadena:
 *      │   └─ "Bill Split Calculator"
 *      ├─ Calcula el importe total de la cuenta, incluida la propina, y muestra el resultado.
 *      ├─ Añade una función para dividir la cuenta, y muestra el resultado.
 * 
**************************************************************************************************/
console.log("Bill Split Calculator\n");

// 0. Importar modulo nativo de Node.js readline para poder leer
const readline = require('readline');

// 1. Crear la interfaz para leer la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
// 2. Pedir un dato al usuario
// Valor de Cuenta
rl.question('Ingresa el valor de la  cuenta: $', (cuenta) => {
    // %propina
    rl.question('Ingresa el porcentaje de la propina: ', (propina) => {
        //Num.  Personas
        rl.question('Entre cuantos se divide la cuenta: ', (grupo) => {
            // Variables
            let billAmount = parseFloat(cuenta);
            let tipPercentage = parseFloat(propina);
            let numPeople = parseInt(grupo);
            
            //Operaciones
            let total = billAmount +((billAmount*tipPercentage)/100);
            let totalPersona = total / numPeople;

            //Mostrar resultados
            console.log(`\nTotal de cuenta con propina: $${total}`);
            console.log(`Cada persona del grupo  pagara: $${totalPersona}`);

            // 3. Cerrar la consola
            rl.close();
        }); //Fin Num. Personas
    }); // Fin %propina
}); //Fin Valor cuenta
