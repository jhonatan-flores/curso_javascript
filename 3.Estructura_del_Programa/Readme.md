# Estructura del programa
## Indice

- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expreciones y Declaraciones](#expreciones-y-declaraciones)
  - [bindins (enlaces)](#bindins-enlaces)
  - [El entorno](#el-entorno)
  - [Control de flujos](#control-de-flujos)
    - [Ejecucion condicional](#ejecucion-condicional)


## interaccion basica con el usuario
Podemos interactuar con el usuario desde js utilisando un metodo sencillo que viene inplementado en los navegadores.
El metodo es conocido como `window` o el metodo de ventana este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - esta funcion nos muestra un mensaje en la pantalla
```js
window.alert("mensaje")
```
- **confirm** - Preguntar al usuario y ofrecer dos botones que se traducen en valores booleanos `Aceptar`(true) y `Cancelar` o `cerrar` (False)
```js
window.confirm("deseas salir del closet")
// si deseamos capturar la respuesta almacenaremos el codigo en una variable
respuesta=window.confirm("quieres ser mi enamorada")
```
- **prompt** - Pregunta al usuario y espera que se ingrese un respuesta
```js
window.prompt("¿cuantos años tienes?")
// si deamos almacenar la respuesta usaremos una variable
respuesta =window.prompt("¿como te llamas?")
```
## Expreciones y Declaraciones
- **Expreciones** - en JS un fragmento que produce un valor es llamada `expreción`, tambien se dice que una `expreción` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>7
!true
```
- **Declaraciones** - en JS es una oración
```js
!true;
let estado=!false;
```
## bindins (enlaces)
Cuando creamos un valorde estos valores son volatiles solo existen en la ejecucion del programa y solo cuando son llamados.
El bingings o enlace es la manera que JS recuerda los valores y mantiene un estado interno haci como la reutilizacion de valores.

**¿Como usamos los bingins en javaescripts?**

Para usar el bingins primero debemos usar la palabra reservada o `keyword` de nombre `let`, despues devemos darle un nombre para identificar el enlace luego asignarle el valor.
```js
34
// este es un enlace que puede apuntar a varios valores como un pulpito con muchos barazos
let edadPersona = 34
// si deseamos que nuestro enlace solo apunte a un valor osea un pulpito con un bracito entonces para crear este enlace debemos hacer uso de de la keyword const
const edad =45;
//este enlace siempre apuntara al valor 45 no podra modificar su enlace a otro valor.  
```

>[!NOTE]
>**¿Que nombre ponerle a nuestro enlace?** - El nombre de un enlace devera describir el valor al que esta enlasado, y devera estar escrita en `camelCase` 

```js
//quiero crear un enlace que tenga el valor de la fecha actual
//incorrecto
let yyyymmdd ="20240910";
//correcto
let fecheActual="09-10-2024";
// correcto
let edadActualAlumno=34;
```
## El entorno
el entorno es conocido como el momento en el que se ejuta o inicia un archivo `JS`.

el entorno al crearce no se crea vacio dentro dentro del entorno se crearan la conexion de enlaces y valores
**tarea**
averiguar mas sobre la ejecucion en linea de la ejecucion de linea en linea de los entornos
## Control de flujos
una centencia se ejecuta como si fuera una historia de arriba a avajo, por ejemplo

```js
let elNumero = prompt("elije un numero")
console.log(`tu numero es la raiz cuadrada de: ${elNumero*elNumero}`)
// primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero 
```
### Ejecucion condicional
hacemo uso de este control de flujo cuando tenemos distintos camino o distintos mensaje que deseamos mostratrar segun una condicion.
**Como creamos una condicion en javascript**
La ejecucion condicional se crea con la palabra reservada (keyword)
`if` a continuacion de una `condicion` en llaves`{}`se escriba el cuerpo del codigo que deseo ejecutaren caso de la condicion sea `verdad`
- **condicion simple `if`**
```js
let comparacion =5>4
if true{
    prompt("escribe tu nombre: ")
}
```