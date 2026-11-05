/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Recibirás un comando del usuario.
 * ├─ Usa una instrucción switch para establecer el valor de la variable message según el comando.
 * ├─ Establece message en:
 * │    ├─ "System starting" → si el comando es "start"
 * │    ├─ "System stopping" → si el comando es "stop"
 * │    ├─ "System paused" → si el comando es "pause"
 * │    ├─ "System resuming" → si el comando es "resume"
 * ├─ Si el comando no coincide con ninguna opción conocida, establece:
 * │    └─ "Unknown command"
 * ├─ Al final, el programa imprimirá el valor de message.
 * └─ Tu tarea es establecer correctamente el valor de message usando una instrucción switch.
 * 
**************************************************************************************************/
// Obtén el comando del usuario
let command = "sto";

// Crea una variable para almacenar el mensaje
let message;

// Estructura switch
switch (command) {
    case "start": 
        message = "System starting"; 
        break;
    case "stop": 
        message = "System stopping";
        break;
    case "pause": 
        message = "System paused";
        break;
    case "resume": 
        message = "System resuming";
        break;
    default : message = "Unknown command"
}

// Imprime el mensaje
console.log(message);