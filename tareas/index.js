const inputTitulo = document.querySelector('#titulo');
const inputDescripcion = document.querySelector('#descripcion');
const btnCrear = document.querySelector('#btnCrear');
const contenedorLista = document.querySelector('#lista');

// Crea una tarea en la API
// Crea una tarea en la API
// Crea una tarea en la API
function crearTarea() {
  const inputTituloValor = inputTitulo.value;
  const inputDescripcionValor = inputDescripcion.value;
  const tarea = {
    titulo: inputTituloValor,
    descripcion: inputDescripcionValor,
  };

  const fetchConfig = {
    method: 'POST',
    body: JSON.stringify(tarea),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(
    'https://mysterious-plateau-36285.herokuapp.com/api/v1/crear/tarea',
    fetchConfig,
  )
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      limpiarIputs();
      obtenerTareas();
    })
    .catch((err) => {
      console.log(err);
    });
}

// Limpia el valor de los inputs
// Limpia el valor de los inputs
// Limpia el valor de los inputs
function limpiarIputs() {
  inputTitulo.value = '';
  inputDescripcion.value = '';
}

// Obtiene todas las tareas de la API
// Obtiene todas las tareas de la API
// Obtiene todas las tareas de la API
function obtenerTareas() {
  fetch(
    'https://mysterious-plateau-36285.herokuapp.com/api/v1/obtener/todas/tareas',
  )
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      mostrarTareas(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Crea el elemento HTML li por cada tarea con su contenido y lo agrega a la lista (ul) 
// Crea el elemento HTML li por cada tarea con su contenido y lo agrega a la lista (ul) 
// Crea el elemento HTML li por cada tarea con su contenido y lo agrega a la lista (ul) 
function mostrarTareas(arrayTareas) {
  // Antes de agregar contenido a la lista limpiamos el contenedor(ul)
  contenedorLista.innerHTML = '';
  
  // Antes de crear los elementos invertimos el arreglo, el primero pasa a ser el ultimo y el ultimo el primero
  arrayTareas = arrayTareas.reverse();
  
  // Recorremos el arreglo y creamos un li con titulo y parrafo por cada elemento en el arreglo
  arrayTareas.forEach((tarea) => {
    // Esto crea un li vacio Ejemplo -->  <li></li>
    const li = document.createElement('li');
    // Creamos el contenido del li con el titulo de la tarea
    let liContent = `
        <h3>${tarea.titulo}</h3>
    `;
    // Si la tarea tiene descripcion, creamos el contenido con el titulo y la descripcion
    if (tarea.descripcion) {
      liContent = `
      <h3>${tarea.titulo}</h3>
      <p>${tarea.descripcion}</p>`;
    }

    li.id = tarea._id
    // agregamos el contenido al li
    li.innerHTML = liContent;
    
    // agregamos el li a la lista
    contenedorLista.appendChild(li);
  });
}

// Le agregamos el evento click al boton
btnCrear.addEventListener('click', crearTarea);

// Activamos la funcion obtenerTareas para traer la data cuando cargue la pagina
obtenerTareas();
