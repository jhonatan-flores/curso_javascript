//ejemplos con operadores de comparacion
console.log(5>6)
//esta operacion me generara un valor de tipo boleano
//mayor iguual que
console.log(6>=6)
//no es igual
console.log(5!=5)
// NaN == NaN
console.log(NaN=NaN)
//Averiguar la forma en que se realizan las comparaciones con cadenas de texto

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