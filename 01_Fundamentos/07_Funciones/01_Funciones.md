# 7. Funciones

Una función es una secuencia de código que tiene un nombre. El propósito de una función es reutilizar una pieza de código varias veces. Las funciones nos ayudan a organizar nuestro código, evitar la repetición y hacer que nuestros programas sean más modulares y fáciles de mantener.

---

## Tabla de Contenido

- [7. Funciones](#7-funciones)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Declarar una función](#declarar-una-función)
    - [Argumentos y Parámetros](#argumentos-y-parámetros)
    - [Retorno](#retorno)
  - [Ejemplo Practico](#ejemplo-practico)

---

## Declarar una función

Para declarar una función, utilizamos la siguiente sintaxis:

```js
function functionName() {
    // Código
}

// Llamar a la función
functionName();
```

> [!NOTE]
> En JavaScript, las declaraciones de funciones se elevan, lo que significa que técnicamente se pueden llamar antes de aparecer en el código. Sin embargo, es una buena práctica escribir las funciones antes de llamarlas para que el código sea claro y legible.

### Argumentos y Parámetros

Un **argumento** es un valor que pasas a una función cuando la llamas. Un **parámetro** es la variable dentro de la función que recibe ese valor. Para definir una función con parámetros, los escribimos entre paréntesis.

***Sintaxis***

```js
function functionName(param1, param2) {
    // Código
}

// Llamar a la función
functionName(value1, value2, value3, ...)
```

> [!NOTE]
> Podemos nombrar los parámetros como queramos y escribir tantos argumentos como necesitemos.

### Retorno

La sentencia `return` especifica el valor que una función produce como salida

***Sintaxis***

```js
function functionName() {
    return 100;
}

// Para capturar el valor devuelto en una variable
let number = functionName();
```

---

## Ejemplo Practico

1. [Declarar una función](/01_Fundamentos/07_Funciones/02_Declarar_Funcion.js)
   1. [Argumentos y Parámetros](/01_Fundamentos/07_Funciones/03_Argumenos_Parametros.js)
   2. [Tipos de Retorno](/01_Fundamentos/07_Funciones/04_Tipos_retorno.cpp)

---

[Inicio](#7-funciones)

---

[Tabla de contenido principal](/Tabla_Contenido.md)

---
