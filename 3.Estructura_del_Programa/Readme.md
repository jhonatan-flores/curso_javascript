# Estructura del programa
## Indice

- [Interacion con el usuario](#interaccion-basica-con-el-usuario)
- [Expreciones y Declaraciones](#expreciones-y-declaraciones)


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