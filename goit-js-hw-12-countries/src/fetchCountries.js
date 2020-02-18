export default fetchCountries;

function fetchCountries(searchQuery, callBack) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      callBack(data);
    })
    .catch(error => console.log(error));
}
