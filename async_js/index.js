const colors = require('colors');

const data = {
  numeroA: 12,
  numeroB: 45
}
// function cocaCola(valor, otroValor ) {
//   if(valor === 2) {
//     return 'Esta es tu cocacola'
//   } else {
//     return 'Por favor ingresa tu dinero'
//   }
// }

// console.log(cocaCola(2))

// function saludar(nombre) {
//   return `Hola ${nombre}`
// }

// function pedirNombreYSaludar(callback, nombre) {
//   if(nombre) {
//     return callback(nombre)
//   } else {
//     return "Por favor ingresa tu nombre"
//   }
// }

// console.log(pedirNombreYSaludar(saludar, "John Doe"))


function suma(numeroA, numeroB) {
  return numeroA + numeroB
}

function resta(numeroA, numeroB) {
  return numeroA - numeroB
}



function pedirNumerosYEjecutarOp(tuFuncion) {

  setTimeout(function(){
    const numeros = data

    console.log(tuFuncion(numeros.numeroA, numeros.numeroB))

  }, 3000)
}

console.log(pedirNumerosYEjecutarOp(resta))

console.log('hello'.yellow);