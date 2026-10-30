# 1. Sintaxis Básica

Como en todo lenguaje de programación, **JavaScript** tiene una serie de normas básicas de sintaxis que debemos seguir.
Estas reglas definen cómo organizar las instrucciones y cómo estructurar el código de manera que el intérprete (el navegador o el entorno de ejecución) pueda procesarlo sin errores.

---

## Tabla de Contenido

- [1. Sintaxis Básica](#1-sintaxis-básica)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Instrucciones y ejecución secuencial](#instrucciones-y-ejecución-secuencial)
  - [Punto y coma para finalizar sentencias](#punto-y-coma-para-finalizar-sentencias)
  - [Llaves para delimitar bloques de código](#llaves-para-delimitar-bloques-de-código)
  - [Sensibilidad a mayúsculas y minúsculas](#sensibilidad-a-mayúsculas-y-minúsculas)
  - [Comentarios](#comentarios)
  - [Ejemplo Practico](#ejemplo-practico)

---

## Instrucciones y ejecución secuencial

En JavaScript, el código está compuesto por instrucciones que se ejecutan de forma secuencial. Esto significa que las instrucciones se ejecutan una tras otra, de arriba hacia abajo, en el orden en que aparecen.

---

## Punto y coma para finalizar sentencias

En JavaScript, cada instrucción generalmente termina con un punto y coma `;`, pero no es obligatorio. La computadora entiende tu código con o sin él.

**Ejemplo:**

```js
let nombre = "Kique";
console.log(nombre);
```

> [!TIP]
> Aunque JavaScript generalmente puede inferir el final de una línea, es una buena práctica usar el punto y coma siempre. De lo contrario, puede dar errores.

---

## Llaves para delimitar bloques de código

Las llaves `{}` se utilizan para definir bloques de código, especialmente en estructuras de control como funciones, bucles o condiciones.
Todo el código dentro de las llaves pertenece al mismo bloque y se ejecutará en conjunto (a efectos del intérprete, es como si fuera una única instrucción).

**Ejemplo:**

```js
if (nombre === "Enrique") {
    console.log("Hola, Enrique!");
}
```

---

## Sensibilidad a mayúsculas y minúsculas

JavaScript es un lenguaje que diferencia entre mayúsculas y minúsculas (case-sensitive). Esto significa que distingue entre nombre, Nombre y NOMBRE, considerándolos variables diferentes.

```js
let nombre = "Kique";
let Nombre = "Enrique";

console.log(nombre); // Imprime "Luis"
console.log(Nombre); // Imprime "Pedro"
```

---

## Comentarios

Los comentarios son notas que escribes dentro del código. El compilador los ignora por completo; existen únicamente para ayudar a las personas a entender el código en el futuro.

Existen dos formas de escribir comentarios en el código:

1. **Comentarios de una sola línea:** Utilizados para comentarios breves que se extienden hasta el final de una línea. Se escriben utilizando dos barras diagonal (``//``) al principio de la línea.
2. **Comentarios de varias líneas:** Utilizados para comentarios más extensos que abarcan varias líneas. Se escriben utilizando una diagonal invertida y un asterisco al principio ``/*`` y un asterisco y una diagonal invertida ``*/`` al final del comentario.

**Ejemplo:**

```js
// Este es un comentario de una línea

/* Este es un
comentario de 
varias líneas */
```

---

## Ejemplo Practico

- [Ejemplo Sintaxis](/01_Fundamentos/01_Sintaxis/02_Sintaxis.js)

---

[Inicio](#1-sintaxis-básica)

---

[Tabla de contenido principal](/Tabla_Contenido.md)

---
