# 7. Funciones

Una función es una secuencia de código que tiene un nombre. El propósito de una función es reutilizar una pieza de código varias veces. Las funciones nos ayudan a organizar nuestro código, evitar la repetición y hacer que nuestros programas sean más modulares y fáciles de mantener.

---

## Tabla de Contenido

- [7. Funciones](#7-funciones)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Declarar una función](#declarar-una-función)
    - [Argumentos y Parámetros](#argumentos-y-parámetros)
    - [Retorno](#retorno)
  - [Expresión de Función](#expresión-de-función)
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

## Expresión de Función

Una expresión de función es una forma de definir una función como parte de una expresión. A diferencia de las declaraciones de función, las expresiones de función no se elevan, lo que significa que no se pueden llamar antes de que se definan en el código.

***Sintaxis***

```js
let functionName = function(parameters) {
    // Código que se ejecutará
    // ...
    return value; // Sentencia return opcional
};
```

La palabra clave `function` va seguida de un nombre opcional para la función. Si se proporciona un nombre, se convierte en una expresión de función con nombre; de lo contrario, es una expresión de función anónima. Los parámetros se especifican entre paréntesis y el cuerpo de la función está entre llaves.

- **Ejemplo de una expresión de función con nombre:**

    ```js
    let add = function sum(a, b) {
        return a + b;
    };
    console.log(add(3, 5)); // Salida: 8
    ```

    En este ejemplo, `add` es la variable que contiene la función, y `sum` es el nombre opcional de la función. Aunque la función tiene un nombre, no puedes llamar a `sum` directamente; debes usar la variable `add`.

- **Ejemplo de una expresión de función anónima:**

    ```js
    let multiply = function(a, b) {
        return a * b;
    };
    console.log(multiply(4, 2)); // Salida: 8
    ```

    En este caso, la función no tiene nombre y se asigna directamente a la variable multiply.

> [!NOTE]
> Las expresiones de función se suelen usar cuando quieres pasar una función como argumento a otra función o cuando quieres crear una función sobre la marcha.

---

## Ejemplo Practico

1. [Declarar una función](/01_Fundamentos/07_Funciones/02_Declarar_Funcion.js)
   1. [Argumentos y Parámetros](/01_Fundamentos/07_Funciones/03_Argumenos_Parametros.js)
   2. [Tipos de Retorno](/01_Fundamentos/07_Funciones/04_Tipos_retorno.cpp)
2. [Expresión de Función](/01_Fundamentos/07_Funciones/05_Exprecion_Funcion.js)

---

[Inicio](#7-funciones)

---

[Tabla de contenido principal](/Tabla_Contenido.md)

---
