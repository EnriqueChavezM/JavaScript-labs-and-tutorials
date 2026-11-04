/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un script que inicialice 1 variable que recibe un número que indica la velocidad del viento y lo almacena en una variable llamada 'wind'.
 * └─ La tarea es inicializar la variable 'status' basándote en las siguientes condiciones:
 *      ├─ "Calm" si wind es menor que 8
 *      ├─ "Breeze" si wind está entre 8 y 31 (incluyendo 8 y 31)
 *      ├─ "Gale" si wind está entre 32 y 63 (incluyendo 32 y 63)
 *      └─ "Storm" de lo contrario
 *  
**************************************************************************************************/
// Variables
let condition = "unset";
let wind = 0.2;

// Estructura Condicional
if (wind < 8) { condition = "Calm"; } 
else if (wind >= 8 && wind <= 31) { condition = "Breeze"; }
else if (wind >= 32 && wind <= 63) { condition = "Gale"; } 
else { condition = "Storm";}

// Mostrar resultados
console.log(`condition = ${condition}`);
