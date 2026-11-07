# 2. Entradas y Salidas de datos (I/O)

Entender las entradas (inputs) y salidas (outputs) en JavaScript es fundamental, ya que son los canales mediante los cuales tu programa interactúa con el usuario.

---

## Tabla de Contenido

- [2. Entradas y Salidas de datos (I/O)](#2-entradas-y-salidas-de-datos-io)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Salida de Datos](#salida-de-datos)
    - [Formas Comunes de Salidas](#formas-comunes-de-salidas)
  - [Entradas de Datos](#entradas-de-datos)
    - [Formas Comunes de Entradas](#formas-comunes-de-entradas)
    - [Conversion de Tipo](#conversion-de-tipo)
  - [Ejemplo Practico](#ejemplo-practico)

---

## Salida de Datos

Es la forma en que JavaScript le muestra información o resultados al usuario (por ejemplo, imprimiendo un mensaje en la consola, mostrando una alerta visual o modificando el contenido de una página web). La forma más sencilla de mostrar algo es usar `console.log()`.

### Formas Comunes de Salidas

- **Consola (para desarrolladores):** JavaScript utiliza el objeto global `console` con su método `log()`. Cada vez que ejecutes tu archivo, lo que esté dentro de los paréntesis aparecerá impreso en la consola de *Node.js*.

  ***Sintaxis***

  ```js
  console.log("Mensaje");
  ```

  > [!NOTE]
  > Puedes mostrar diferentes tipos de datos, como números y booleanos
  > También puedes mostrar varios valores a la vez separándolos con comas. Esto imprimirá cada valor con un espacio de por medio.
  > Recuerda, `console.log()` se usa principalmente para probar y depurar tu código. Es una herramienta poderosa para ver qué está sucediendo en tu programa.

  - *Combinar Texto y Variables*

    Para insertar valores de variables en cadenas, utiliza literales de plantilla con comillas invertidas `(``)` y la sintaxis `${}`.

    ***Sintaxis***

    ```js
    console.log(`Texto ${Variable}`);
    ```

---

## Entradas de Datos

### Formas Comunes de Entradas

- **Consola (para desarrolladores):**
  Como *Node.js* corre en el entorno del sistema operativo (*la terminal*), necesitamos utilizar un módulo nativo llamado `readline` para poder leer lo que el usuario escribe por el teclado.
  
  ***Sintaxis***
  
  ```js
  // 0. Importar modulo nativo de Node.js readline para poder leer
  const readline = require('readline');
  
  // 1. Crear la interfaz para leer la consola
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
    
  // 2. Pedir un dato al usuario
  rl.question('Escribe un texto: ', (respuesta) => {
    // Aquí usas el dato recibido
    console.log('Escribiste:', respuesta);

  // 3. Cerrar la consola
  rl.close();
  });
  ```

### Conversion de Tipo

Cuando un usuario escribe datos a través de una entrada, el programa siempre los recibe como texto (**string**), para poder utilizarlo en otro tipo de datos tenemos varias opciones que son:

1. **Conversión Numérica:**
   - `parseInt`: Convierte un texto en un número entero (**sin decimales**). Ignora cualquier parte decimal.
  
      **Ejemplo**

      ```js
      parseInt("100");      // Devuelve el número 100
      parseInt("100.50");   // Devuelve 100 (ignora los decimales)
      parseInt("42px");     // Devuelve 42 (ignora las letras al final)
      parseInt("abc123");   // Devuelve NaN (Not a Number, porque empieza con letras)
      ```

      > [!NOTE]
      > Siempre es una buena práctica pasar la base numérica como segundo argumento, por ejemplo, `parseInt("10", 10)` para base decimal
  
   - `parseFloat`: Convierte un texto en un número decimal (**coma flotante**), conservando los decimales.
  
      **Ejemplo**

      ```js
      parseFloat("99.99");  // Devuelve el número decimal 99.99
      parseFloat("3.1416"); // Devuelve 3.1416
      parseFloat("10px");   // Devuelve 10
      ```

    > [!NOTE]
    > Ambas funciones leen el número desde el principio de la cadena y se detienen en el primer carácter que no forma parte de un número. Si la cadena no empieza con un número, devuelven `NaN` (Not a Number)

2. **Conversión booleana:**
   - `Boolean()`: Para convertir valores a booleanos

      **Ejemplo**

      ```js
      Boolean(1);        // true
      Boolean(0);        // false
      Boolean("");       // false
      Boolean("hello");  // true
      ```

3. **Conversión de cadenas:**
   - `String()`: para convertir valores a cadenas

      **Ejemplo**

      ```js
      String(42);    // "42"
      String(true);  // "true"
      ```

---

## Ejemplo Practico

1. [Salida por consola](/01_Fundamentos/02_Entradas_Salidas/02_Salida_Consola.js)
2. [Entradas de Datos](/01_Fundamentos/02_Entradas_Salidas/03_Entrada_datos.js)
   1. [Conversion de Tipo](/01_Fundamentos/02_Entradas_Salidas/04_Conversion_Tipo.js)

---

[Inicio](#2-entradas-y-salidas-de-datos-io)

---

[Tabla de contenido principal](/Tabla_Contenido.md)

---
