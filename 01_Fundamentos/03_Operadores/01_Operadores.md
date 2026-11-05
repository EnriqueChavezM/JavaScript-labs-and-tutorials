# 3. Operadores

Los operadores se utilizan para realizar operaciones sobre valores.

---

## Tabla de Contenido

- [3. Operadores](#3-operadores)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Operadores Aritméticos](#operadores-aritméticos)
  - [Operadores de asignación](#operadores-de-asignación)
  - [Operadores de comparación](#operadores-de-comparación)
  - [Operadores Lógicos](#operadores-lógicos)
  - [Ejemplo Practico](#ejemplo-practico)

---

## Operadores Aritméticos

Los operadores aritméticos nos permiten realizar cálculos matemáticos como sumar, restar, multiplicar y dividir valores numéricos.

Los operadores aritméticos básicos son:

| Operador | Nombre | Descripción |
| :---: | :--- | :--- |
| + | Suma | Suma dos valores |
| - | Resta | Resta el segundo valor del primero |
| * | Multiplicación | Multiplica dos valores |
| / | División | Divide el primer valor por el segundo |
| % | Módulo | Retorna el residuo de la división del primer valor por el segundo |
| ** | Exponencial | Eleva el primer valor a la potencia del segundo |
| ++ | Incremento | Incrementa el valor de una variable en uno |
| -- | Decremento | Disminuye el valor de una variable en uno |

---

## Operadores de asignación

Los operadores de asignación en JavaScript nos permiten asignar valores a variables

Los operadores aritméticos básicos son:

| Operador | Nombre | Descripción |
| :---: | :--- | :--- |
| = | Asignación | Asigna un valor a una variable |
| += | Suma | Suma el valor a la variable y asigna el resultado |
| -= | Resta | Resta el valor de la variable y asigna el resultado. |
| *= | Multiplicación | Multiplica el valor de la variable y asigna el resultado |
| /= | División | Divide el valor de la variable y asigna el resultado |
| %= | Módulo | Calcula el módulo del valor de la variable y asigna el resultado |
| **= | Exponencial | Eleva una variable a la potencia de un valor y asigna el resultado a esa variable. |

---

## Operadores de comparación

Los operadores de comparación nos permiten comparar valores y obtener un resultado *booleano* (`true` o `false`) según la relación entre los valores.

Estos operadores nos permiten comparar dos valores y determinar si son iguales, diferentes, mayores, menores y son fundamentales para evaluar expresiones y tomar decisiones.

Los operadores aritméticos son:

| Operador | Nombre | Descripción |
| :---: | :--- | :--- |
| == | Igualdad | Compara si dos valores son iguales |
| === | Estrictamente igual | Compara si dos valores y su tipo son idénticos |
| != | Desigualdad | Compara si dos valores son diferentes |
| !== | Estrictamente desigual | Compara si dos valores y su tipo son idénticos |
| > | Mayor que | Verifica si un valor es mayor que otro |
| < | Menor que | Verifica si un valor es menor que otro |
| >= | Mayor o igual que | Verifica si un valor es mayor o igual |
| <= | Menor o igual que | Verifica si un valor es menor o igual |

---

## Operadores Lógicos

Los operadores lógicos se utilizan para comprobar combinaciones de comparaciones que devuelven `true` o `false`.

| Operador | Significado |
| :---: | :--- |
| **&&** | Es una “y” lógica que devuelve un resultado `true` solo si todos sus operadores son `true` |
| **&#124;&#124;** | Es una “o” lógica que devuelve un resultado `true` solo si alguno sus operadores son `true` |
| **!** | Es una negación (not) que devuelve un resultado `true` si su argumento es `false` |

> [!NOTE]
> `!`(not) delante de dos condiciones unidas por `&&` (y), puedes dividirlo en dos partes separadas. `&&` (y) se convierte en `||` (o), y cada parte tiene su propio `!` (not):
> `!(A && B)`  es lo mismo que `(!A) || (!B)`.
> Lo contrario también es correcto: `!(A || B)` es lo mismo que `(!A) && (!B)`

---

## Ejemplo Practico

1. [Operadores Aritméticos](/01_Fundamentos/03_Operadores/02_Operadores_Aritmeticos.js)
2. [Operadores de Asignación](/01_Fundamentos/03_Operadores/03_Operadores_Asignación.js)
3. [Operadores de Comparación](/01_Fundamentos/03_Operadores/04_Operadores_Comparacion.js)
4. [Operadores Lógicos](/01_Fundamentos/03_Operadores/05_Operadores_logicos.js)

---

[Inicio](#3-operadores)

---

[Tabla de contenido principal](/Tabla_Contenido.md)

---
