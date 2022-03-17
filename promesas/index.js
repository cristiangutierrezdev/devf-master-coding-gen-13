const axios = require('axios');

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // resolve('Llego tu data')
//     reject('Hubo un error');
//   }, 3000);
// });

// promise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

function showData(data) {
  return axios.get(data.data.species.url)
}

function showError(error) {
  console.log(error);
}

function showSpecies(data) {
  console.log(data.data)
}

axios
  .get('https://pokeapi.co/api/v2/pokemon-shape/8/')
  .then(showData)
  .then(showSpecies)
  .catch(showError);
