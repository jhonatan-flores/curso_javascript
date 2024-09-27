# Valores, Tipos y Operadores
## Indice
- [Valores, Tipos y Operadores](#valores-tipos-y-operadores)
  - [Indice](#indice)
  - [valores](#valores)
    - [Datos primitivos](#datos-primitivos)
      - [Numeros(Number)](#numerosnumber)
      - [numero de tipo entero](#numero-de-tipo-entero)
      - [numero de punto flotante, decimal, fraccion](#numero-de-punto-flotante-decimal-fraccion)
      - [numeros notacion cientifica](#numeros-notacion-cientifica)
      - [numeros especiales](#numeros-especiales)
      - [Aritmetica (operadores aritmerico)](#aritmetica-operadores-aritmerico)
      - [cadenas](#cadenas)
      - [conquetanacion](#conquetanacion)
      - [Plantillas Literales](#plantillas-literares)
## valores
Imagina unmar de bits.
Una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo`o`memoria principal`o`memoria volatil`o`ram`.
Ahora la memoria no volatil o memoria secundaria tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.
- tipos (tipos de datos)
- operadores
cuando nosotros programos hacemos uso de `memoria de trabajo`, para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits, javascript ordena los bits en pequeños partes o piezas de informacion a esto se le conoce como `VALORES`.
cada valor tiene una funcionalidad distinta puede ser un numero un texto o una funcion

cuando hablamos de tipos de datos en javascript nos referimos a su representacion binaria y al tipo de  valor que usamos

### Datos primitivos
son aquellos datos que ya existen no pueden ser creados, actualizados, ni eliminados solo pueden ser llamados para el uso que deseamos darle.
los datos primitivos en javascript son
#### Numeros(Number)
los valores de tipo numero, como es de esperar son numeros y en javascript se escribe o se hace el llamado de la siguiente manera
#### numero de tipo entero
```js
// entero positivo
20
// entero negativo
-20
//estamos usando un patron de bits para el numero 20 que existia dentro de la memoria de trabajo
```
#### numero de punto flotante, decimal, fraccion
```js
// decimal positivo
2.7
0.
.0
// decimal negativo
-3.6
```
#### numeros notacion cientifica
```js
2.998e8
// 9.998 * 10^8
```
#### numeros especiales
en javascript existen tres valores de tipo numero que se consideran un dato primitivo numerico de tipo especial
```js
Infinity
- Infinity
NaN
// not a number
// no es un numero
// cuando el resultado de una operacion es matematicamente imposible.
```
> [!WARNING]
> Cuando javascript realiza operacion con numeros enteros el resultado siempre sera exacta, cuando realize operacion con numeros decimales el resultado perdera precision por que solo tiene 64 bits para almacenar el numero estto suele ocurrir con resultados cuyos decimales sean infinitos como el caso el numero PI **es nuestra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores**
---
> [!TIP]
> Cuando javascript hace trabajo de memoria (cuando crea un patron de bit para almacenar) todos los numeros son almacena como decimal positivo
#### Aritmetica (operadores aritmerico)
la principal operacion que se puede hacer con numero es la aritmerica.
para estl tenemoslos Operadores Aritmericos como:
- suma (+).
- resta (-).
- multiplicacion (*).
- division (/).
- potencia (**).
- modulo (%).
**podemos agrupar operacion con parentesis () las operciones que esten entre los parentesis se ejecutaran primero**
consulta el archivo de operadores [aqui](./operadores.js).
ve los ejercicios [aqui](./ejercicios.js)
#### Cadenas
el siguiente tipo de dato primitivo es la cadena `cadena` - `string`

¿Para que sirve las cadenas en js?
- para representar texto

se escribe encerrando entre comillas
```js
"soy un texto"//comillas dobles
'tambien soy texto'//comillas simples
`tambien soy texto`//acento grave
//cadena vacia
""
''
```
**Problema** -  Como representamos representamos un texto entre comillas para hacer uso de comillas dentro del contenido de una cadena podemos seguir las siguientes recomendaciones:
```js
// si nuentro texto tiene que estar entre comilllas simples
'este texto se muestra entre comillas simples'
// si nuestro texto  tiene que estar entre comillas dobles
"este texto se muestra entre comillas dobles"
// si nuestro texto tanto comillas dobles como simples 
`'esta en la comilla simple',"estaen comillas dobles"`
```
otra manenera de hacer lo antes mencionado es haciendo uso de la barra invertida `\`, tambien conocido `caracter de escape`
hacer uso de este caracter indica el caracter posterior tendra un significado especial.
js
"de este texto solo esta \"palabra\" estara en comillas "

*problema* - deseamos aggrgar un salto de linea en nuestro texto.
js
// solucionasmos este problema hacdiendo uso de los acentos graves
`primera linea
segunda linea`

antes de la incorporacion de es6 en el uso de acentos graves se utilizaba el caracter de escape`\`
```js
" esta es mi primera linea \n y esta es la segunda linea"
```
*problema* -deseo tabular en texto
```js
`
este texto no esta tabulado
   este texto si esta tabulado 
`
```
ahora tabulaciones haciendo uso del caracter espacio
```js
"i tambien \n\t y tabulado"
```
#### Conquetanacion
el unici operador aritmetico que puede ser usado por cadenas es operador de suma (+) puede ser usado entre dos o mas cadenas se llama operador de concatenacion , lo que realiza es unir cadena en una sola.
```js
"hola"+" "" "+"mundo"
```
#### Plantillas Literares
Las plantillas literalaes mencionados anteriormente con el nombre de acentas garves son usados para mostrar texto literal, tambien nos permite ejecutar codigo js dentro de una plantilla literal el codigo o el resultado de este codigo sera transformado en un dato de tipo texto y se incluira en la posicion en que se encuentre, para hacer uso de esta funcionalidad devemos usar la siguiente exprecion `$()`
```js
// Creando una plantilla literal - template literals 
''
//usando js dentro de una plantilla literal
`la suma de 1+1 es = ${1+1}`
```
> [!TIP]
> se dice literal por que con el formato que codificamos sera mostrado de esa misma forma en la consola
