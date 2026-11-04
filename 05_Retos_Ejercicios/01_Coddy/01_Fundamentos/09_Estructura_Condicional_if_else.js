/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Escribe un código que recibe un número que indica la lluvia en milímetros y lo almacena en una variable llamada "rainfall".
 * └─Tu tarea es inicializar una variable llamada rainCondition basada en las siguientes condiciones:
 *      ├─ "Dry" si rainfall es menor que 1.
 *      ├─ "Light Rain" si rainfall está entre 1 y 10 (incluyendo 1 y 10).
 *      ├─ "Moderate Rain" si rainfall está entre 11 y 50 (incluyendo 11 y 50).
 *      └─ "Heavy Rain" si rainfall es mayor que 50.
 * 
**************************************************************************************************/
// Variables
let rainCondition = "unset";
let rainfall =  55;

// Estructura condicional
if (rainfall < 1){ rainCondition = "Dry";}
else if (rainfall >= 1 && rainfall <= 10) { rainCondition = "Light Rain";}
else if (rainfall >= 11 && rainfall <= 50) { rainCondition = "Moderate Rain";}
else { rainCondition = "Heavy Rain";}

// Imprimir resultado
console.log(rainCondition);3
