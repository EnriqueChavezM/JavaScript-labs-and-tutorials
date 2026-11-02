/**************************************************************************************************
 * 
 * Desafío 1:
 * ├─ Estás ayudando a una tienda de mascotas a crear un sistema para determinar si puede venderle una mascota a un cliente.
 * ├─ Inicializa las siguientes variables:
 * │    ├─ "has_license" con el valor true
 * │    ├─ "has_space" con el valor false
 * │    └─ "has_experience" con el valor true
 * └─ Escribe las siguientes expresiones lógicas para determinar si:
 *      ├─ "can_sell_regular_pet": el cliente necesita una licencia O experiencia, Y debe tener espacio
 *      ├─ "can_sell_exotic_pet": el cliente necesita tanto una licencia COMO experiencia, Y debe tener espacio
 *      └─ "cannot_sell_any_pet": el cliente NO tiene licencia NI experiencia, O NO tiene espacio
 * 
**************************************************************************************************/
// Inicializa las variables
// Declara aquí las tres variables indicadas en el ejercicio
let has_license = true;
let has_space = false;
let has_experience =  true;
// Calcula las condiciones
// Reemplaza cada marcador de posición de abajo por la expresión lógica que describe el ejercicio
let can_sell_regular_pet = (has_license || has_experience) && has_space;
let can_sell_exotic_pet = (has_license && has_experience) && has_space;
let cannot_sell_any_pet = !(has_license && has_experience) || !has_space;

// No borres las líneas de abajo
console.log("Can sell regular pet:", can_sell_regular_pet)
console.log("Can sell exotic pet:", can_sell_exotic_pet)
console.log("Cannot sell any pet:", cannot_sell_any_pet)