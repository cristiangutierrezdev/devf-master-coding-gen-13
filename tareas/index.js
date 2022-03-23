// Obtenemos los elemetos HTML que vamos a utilizar
const input = document.querySelector('#titulo')
const btn = document.querySelector('#btn')

/*
  La funcion obtiene el valor del input y crea una tarea nueva en la API
*/ 
function crearTarea() {
  const value = input.value
  const options = {
    method: 'POST',
    body: JSON.stringify({titulo:value}),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('https://mysterious-plateau-36285.herokuapp.com/api/v1/crear/tarea', options)
  .then(function(result){
    return result.json()
  }).then(function(result){
    console.log(result)
  }).catch(function(error){
    alert(error)
  })
}

// Le decimos al boton que cuando hagan click en el ejecute  
// la funcion crearTarea previamente creada
btn.addEventListener("click", crearTarea)
