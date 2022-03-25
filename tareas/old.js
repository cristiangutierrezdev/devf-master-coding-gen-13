// Obtenemos los elemetos HTML que vamos a utilizar
const input = document.querySelector('#titulo');
const btn = document.querySelector('#btn');

/*
  La funcion obtiene el valor del input y crea una tarea nueva en la API
*/
function crearTarea() {
  const value = input.value;
  const data = {
    titulo: value,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(
    'https://mysterious-plateau-36285.herokuapp.com/api/v1/crear/tarea',
    options,
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      if (result.errors) {
        alert(result.errors.titulo.message);
      } else {
        console.log(result);
        alert('tarea creada');
      }
    })
    .catch(function (error) {
      alert(error.message);
    });
}

// Le decimos al boton que cuando hagan click en el ejecute
// la funcion crearTarea previamente creada
btn.addEventListener('click', crearTarea);

// EJERCICIOS

// GET
// Hacemos una peticion de tipo GET a la API para obtener un elemento por su ID
function obtenerData() {
  fetch(
    'https://mysterious-plateau-36285.herokuapp.com/api/v1/obtener/tarea/623be066ca967e001728b9b1',
  )
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// obtenerData()

// PUT

function modificarDatos() {
  const data = {
    titulo: 'Cambiamos el titulo :D',
  };

  const options = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch('https://mysterious-plateau-36285.herokuapp.com/api/v1/modificar/tarea/623be066ca967e001728b9b1', options)
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// modificarDatos()

function borrarTarea() {
  const options = {
    method: 'DELETE',
  };

  fetch('https://mysterious-plateau-36285.herokuapp.com/api/v1/borrar/tarea/623be066ca967e001728b9b1', options)
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

borrarTarea() 