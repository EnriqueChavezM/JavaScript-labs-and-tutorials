/**************************************************************************************************
 * 
 * Ejemplo 1.
 * ├─ Escribe un programa que imprima los números del 1 al 20 (incluido).
 * └─ Añadir sentencias if y continue para que se impriman solo los números pares.
 * 
**************************************************************************************************/
//Bucle
for (let i = 1; i <= 20; i++) {
    //Condicional
    if (i % 2 == 1){
        continue;
    }
    console.log(i);
}