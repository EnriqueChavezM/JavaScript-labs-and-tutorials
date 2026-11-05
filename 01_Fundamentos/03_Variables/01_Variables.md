# 2. Variables

Las variables son contenedores que almacenan valores de datos. Se utilizan para guardar, manipular y mostrar información dentro de un programa.

En resumen, una variable es como una unidad de memoria a la que podemos acceder escribiendo el nombre de la variable.

Cada variable tiene un nombre único y un valor que puede ser de distintos tipos. JavaScript es capaz de detectar automáticamente el tipo de variable, lo que hace que la programación sea más eficiente.

---

## Tabla de Contenido

- [2. Variables](#2-variables)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Alcance de Variables (Local vs Global)](#alcance-de-variables-local-vs-global)
  - [Declaración de variables](#declaración-de-variables)
    - [Convenciones de nomenclatura](#convenciones-de-nomenclatura)
  - [Tipos de variables](#tipos-de-variables)
    - [Number](#number)
    - [String](#string)
    - [Boolean](#boolean)
    - [Valor null](#valor-null)
    - [valor undefined](#valor-undefined)
  - [Modificador de Tipo](#modificador-de-tipo)
    - [Constantes](#constantes)
  - [Coerción de tipos(Casting)](#coerción-de-tiposcasting)
  - [Ejemplo Practico](#ejemplo-practico)

---

## Alcance de Variables (Local vs Global)

Las variables definidas dentro de una función tienen un alcance local, lo que significa que solo son accesibles dentro de la función. Por otro lado, las variables definidas fuera de cualquier función tienen un alcance global y pueden ser accedidas desde cualquier parte del programa.

---

## Declaración de variables

En JavaScript las variables se declaran con la palabra reservada `let`. Para declarar una variable simplemente utilizamos la palabra clave `let` seguida del nombre de la variable *(y, opcionalmente, una asignación inicial)*.

***Sintaxis***

```js
let Nombre = valor_opcional;
```

Cada variable tiene un *nombre único* y un *valor* que puede ser de *distintos tipos*. JavaScript es capaz de **detectar automáticamente el tipo** de variable, lo que hace que la programación sea más eficiente.

### Convenciones de nomenclatura

Existen ciertas reglas y convenciones para nombrar variables:

1. Los nombres de variables distinguen entre *mayúsculas* y *minúsculas*, lo que significa que `myVariable` y `myvariable` se consideran diferentes.
2. Los nombres de variable solo pueden contener letras *(a-z, A-Z)*, números *(0-9)*, guiones bajos *(_)* y signos de pesos *($)*.
3. Los nombres de las variables deben *comenzar con una letra, un guion bajo o un signo de dólar*. **No pueden comenzar con un número.**
4. Ciertas palabras están reservadas y no pueden usarse como nombres de variables, como `let`, `const`, `function`, `if`, `else`, etc.
5. Es una práctica común usar **camelCase** para los nombres de variables, donde cada palabra excepto la primera comienza con una letra mayúscula (**por ejemplo**, `myVariableName`).

A continuación, se muestran algunos ejemplos de nombres de variables válidos y no válidos:

- **Válido:**

```js
let myVariable = 10;
let _name = "John";
let $count = 5;
```

- **No válido:**

```js
let 1stPlace = "Invalid"; // No puede empezar con un número
let my-variable = 3; // No puede contener guiones
let if = true; // No se pueden usar palabras reservadas
```

Seguir estas convenciones de nomenclatura hace que tu código sea más legible y ayuda a evitar posibles errores.

---

## Tipos de variables

Los tipos de variables son inmutables, lo que significa que no se pueden cambiar una vez que se han creado.

### Number

El tipo *number* en JavaScript representa tanto **números enteros** como de **punto flotante**.

**Ejemplo:**

```js
let numeroInt = 10;
let numeroFloat = 3.1416;
```

### String

El tipo *string* representa una secuencia de caracteres, como texto o palabras. Las cadenas se deben encerrar entre comillas simples `' '` o dobles `" "`.

**Ejemplo:**

```js
let nombre = 'Kique';
let mensaje = "¡Hola, mundo!";
```

### Boolean

El tipo *boolean* representa un valor de verdad, que puede ser `true` (verdadero) o `false` (falso). Es útil en expresiones condicionales y lógicas.

**Ejemplo:**

```js
let esMayor = true;
let esActivo = false;
```

### Valor null

En JavaScript, `null` es un valor especial que representa la ausencia intencional de cualquier objeto o valor.

**Ejemplo:**

```js
let dato = null;
```

### valor undefined

El valor `undefined` indica que una variable ha sido declarada pero aún no se le ha asignado ningún valor.

**Ejemplo:**

```js
let dato;
console.log(dato); // Salida: undefined
```

---

## Modificador de Tipo

### Constantes

Una constante es una variable que no puede ser reasignada después de su inicialización. Esto significa que una vez que se ha asignado un valor a una constante, ese valor no podemos cambiarla la ejecución del programa.

La declaración de constantes se realiza mediante la palabra clave `const`, igual que `let`, pero una vez que establezcas su valor, no podrás cambiarlo después.

***Sintaxis***

```js
const NOMBRE_CONSTANTE = valor;
```

---

## Coerción de tipos(Casting)

La coerción de tipos es la **conversión automática de valores de un tipo de datos a otro**. Esto puede ocurrir implícitamente en ciertas operaciones o **explícitamente** cuando utilizas funciones como `String()`, `Number()` o `Boolean()`.

- **Coerción de tipos implícita** a menudo ocurre cuando usas el operador de igualdad débil `==` o cuando realizas operaciones entre diferentes tipos, como sumar un número a una cadena de texto.

 **Ejemplo:**

 ```js
 let result = 5 + "5"; // Contiene "55", porque el número 5 se convierte implícitamente en la cadena "5" y luego se concatena
 let result = true == 1; // Contiene true, porque el booleano true se convierte implícitamente al número 1
 ```

- **Coerción de tipos explícita** se puede realizar utilizando funciones integradas.
  - `String(value)`: convierte un valor en una cadena de texto
  - `Number(value)`: convierte un valor en un número
  - `Boolean(value)`: convierte un valor a un booleano

 **Ejemplo:**

 ```js
 let str = "123";
 let num = Number(str) + 7; // Almacena 130
 let bool = true;
 let numBool = Number(bool); // Contiene 1
 ```

---

## Ejemplo Practico

1. [Tipos de Variables](/01_Fundamentos/02_Variables/02_Tipo_Variables.js)
2. [Modificador `const`](/01_Fundamentos/02_Variables/03_Variables_Constantes.js)
3. [Coerción de Tipo](/01_Fundamentos/02_Variables/04_Coercion_Tipo.js)

---

[Inicio](#2-variables)

---

[Tabla de contenido principal](/Tabla_Contenido.md)

---
