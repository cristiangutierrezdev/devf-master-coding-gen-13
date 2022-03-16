// Ejercicio 1
function showMessage() {
  return 'Hola este es un mensaje';
}

function activeCallback(funcion) {
  return funcion();
}

// console.log(activeCallback(showMessage))

// Ejercicio 2
function showType(param) {
  const tipo = typeof param;
  const mensaje = `La variable es tipo ${tipo}, y su contenido es: ${param}`;

  return mensaje;
}

function activateMyFuction(funcion, param) {
  return funcion(param);
}

console.log(activateMyFuction(showType, false));

// Ejercicio 3

function minus(cualquierTexto) {
  return cualquierTexto.toLowerCase();
}

function mayus(cualquierTexto) {
  return cualquierTexto.toUpperCase();
}

function ordenSuperior(callback, cualquierTexto) {
  return callback(cualquierTexto);
}


console.log(ordenSuperior(minus, "PEGelagarto"))
console.log(ordenSuperior(mayus, "PEGelagarto"))