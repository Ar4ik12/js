export default fetchCountries;

function fetchCountries(searchQuery, callBack) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      callBack(data);
    })
    .catch(error => console.log(error));
}
