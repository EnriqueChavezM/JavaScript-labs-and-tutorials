/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Crea una variable llamada "temperature" y con el valor de 25.
 * └─ Usa sentencias if para:
 *      ├─ Si temperature es mayor que 30, establece una variable message en "Too hot!".
 *      ├─ Si temperature es menor que 10, establece message en "Too cold!".
 *      └─ Si temperature está entre 10 y 30, establece message en "Just right!".
 * 
**************************************************************************************************/
// Variables
let temperature = 25;
let message = ""; // Establece el mensaje basado en la temperatura

// Sentencias if
if (temperature > 30){ message = "Too hot!";}
if (temperature < 10){ message = "Too cold!";}
if (temperature >= 10 && temperature <= 30) { message = "Just right!"}

// Mostrará el resultado
console.log(message); 