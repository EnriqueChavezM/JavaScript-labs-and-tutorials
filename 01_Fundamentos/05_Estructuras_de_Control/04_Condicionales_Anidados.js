/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Crea un programa que verifique si alguien puede entrar a una piscina.
 * ├─ Reglas:
 * │    ├─ Debe tener al menos 10 años
 * │    └─ Si es menor de 13 años, debe estar acompañado por un adulto
 * └─ Imprime exactamente estos mensajes:
 *      ├─ Si es demasiado joven: "Sorry, you are too young"
 *      ├─ Si es menor de 13 y no hay un adulto: "Sorry, you need an adult with you"
 *      ├─ Si es menor de 13 con un adulto: "You can enter with adult supervision!"
 *      └─ Si tiene 13 años o más: "You can enter by yourself!"
 * 
**************************************************************************************************/
// Variables
let age = 12; 
let has_adult = false;

// Estructura condicional
if (age < 10) {console.log("Sorry, you are too young");}
else {
    if (age < 13){
        if (!has_adult){console.log("Sorry, you need an adult with you");}
        else {console.log("You can enter with adult supervision!");}
    }
    else {console.log("You can enter by yourself!");}
}