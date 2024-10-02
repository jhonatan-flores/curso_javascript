//ejemplos con operadores de comparacion
console.log(5>6)
//esta operacion me generara un valor de tipo boleano
//mayor iguual que
console.log(6>=6)
//no es igual
console.log(5!=5)
// NaN == NaN
console.log(NaN=NaN)
//Averiguar la forma en la que se realizan las comparaciones con cadena de texto
/*Comparaciones de Cadenas en JavaScript a Nivel Binario

En JavaScript, las comparaciones de cadenas se basan en los valores **Unicode** de los caracteres, los cuales se representan internamente usando la codificación **UTF-16**. A continuación, se explica cómo funciona este proceso de comparación a nivel binario.

1. **Codificación Interna (UTF-16)**
- JavaScript utiliza **UTF-16** para representar caracteres en memoria.
- La mayoría de los caracteres comunes, como letras y números, se representan usando **16 bits** (2 bytes).
- Algunos caracteres especiales (como emojis) pueden ocupar más de 16 bits, utilizando **4 bytes**.

2. **Valores Unicode**
Cada carácter en una cadena tiene un valor Unicode, que es un número entero que lo representa.

Ejemplos:
- `"a"` tiene el valor Unicode **97** (binario: `01100001`).
- `"A"` tiene el valor Unicode **65** (binario: `01000001`).
- El emoji `😀` tiene el valor Unicode **128512** (binario: `1111101100000000`).

3. **Proceso de Comparación**
Cuando se comparan cadenas en JavaScript:
- La comparación se realiza **carácter por carácter** desde la izquierda.
- Cada carácter se convierte a su valor Unicode, y se comparan los valores binarios de los caracteres correspondientes.
- Si hay una diferencia en los valores Unicode de dos caracteres, esa diferencia determina el resultado de la comparación.
- Si todos los caracteres son iguales, se comparan las longitudes de las cadenas.

4. **Comparación Binaria Real**
JavaScript compara los valores binarios (UTF-16) de cada carácter. A nivel binario, los valores numéricos de los caracteres se utilizan directamente.

Ejemplo:
```javascript
"a" < "b" // true porque 97 (binario: 01100001) < 98 (binario: 01100010)
*/

//siempre las letras mayusculas van a ser menores que las mayusculas
//Z>a
//por que javaScript compara los codigos unicode de cada caracter
//!>=?
console.log("!">="?")
//Ardvark<Zoroaster
console.log("Ardvark"<"Zoroaster")


// en caso del operador && su resultado su resultado sera verdadero solo si ambos balores son verdaderos
console.log(true && false)
console.log(true && true)
// observacion: si ambos valoresson verdaderos devolvera el segundo valor
 console.log(`hola` && `mundo`)
 //OBSERVACION: en caso exista un valor verdadero y uno falso devolvera el valor falso
 console.log(0 && `hola`)
// en caso del opeerador || produce verdaero si cualquiera de su valores datos es verdadero
console.log(false||false)
console.log(true||false)

//
respuesta=" "
console.log(respuesta||"tu busqueda no exise")
console.log(0||"")
//en caso del operador ! invierte el valor dado
console.log(!true)
console.log(!false)

//usando el operador relacional
//solo funciona en objetos

//averiguar por que sale false en este caso
console.log("hola"in "hola" , "mundo")
/*
Javascript no está buscando el valor de hola, esta buscando si hay una posición llamado "hola" en esta lista las posiciones, son números como (0 y 1) por eso da False 
*/