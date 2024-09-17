//para mostrar texto plano
console.log("para mostrar texto plano")
//para mostrar texto informativo
console.info("mensaje informativo")
//para mostrar texto alerta
console.warn("Mensaje tipo alerta")
//para mostrar texto error
console.error("mensaje tipo error")
// mensaje por consola de gestion de tiempo
console.time("mi programa averiga la edad se ejecuta en")
edad=17
if(edad>=18){
    console.log("eres mayor de edad")
}else{
    console.log("eres menor de edad")
}
console.timeEnd("mi programa averiga la edad se ejecuta en")