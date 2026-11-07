/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Se te dan dos cadenas, "length" y "width", que representan las dimensiones de un rectángulo.
 * ├─ Convierte length y width a números de punto flotante usando la función de conversión de tipos adecuada.
 * ├─ Calcula el área del rectángulo y guárdala en una variable "area".
 * ├─ Calcula el perímetro del rectángulo y guárdalo en una variable "perimeter".
 * └─ Imprime tanto el área como el perímetro en el siguiente formato:
 *      └─ "The area is: [area] and the perimeter is: [perimeter]".
 * 
**************************************************************************************************/
// 0. Importar readline para poder leer
const readline = require('readline');

// 1. Crear la interfaz para leer la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
// 2. Pedir un dato al usuario
// largo
rl.question('Ingrese largo del rectángulo: ', (length) => {
    // Ancho
    rl.question('Ingrese el ancho del rectángulo: ', (width) =>{

        // Operación
        let area = parseFloat(length) * parseFloat(width);
        let perimeter = (parseFloat(length) + parseFloat(width))*2;

        // Imprimir resultado
        console.log(`The area is: ${area} and the perimeter is: ${perimeter}`);
        
        // 3. Cerrar la consola
        rl.close();
    });
});
