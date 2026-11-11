/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un programa que imprima los números del 1 al 20 (incluido).
 * └─ Añadir sentencias if y break para que solo se impriman los números del 1 al 8.
 * 
**************************************************************************************************/
// Bucle for
for (let i = 1; i <= 20; i++) {
    
    // Condicional
    if (i == 9){
        break;
    }

    // Imprimir i
    console.log(i);
}