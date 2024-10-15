//ejemplos de condicion simple
//capturamos la edad y lo comvertimos a numero
let edad = Number(prompt("ingresa tu edad"))
//verificamos si el tipo de datos es Number realmente
if (Number.isNaN(edad)){
    //si la comparacion es verdad mostraremos por consola la raiz cuadrado de edad
    console.log(edad*edad) 
};
//ejemplo de una condicion simple de una sola linea
if (1+1==2) console.log("es verdad"); 