const KEY = '15314958-d0cf92c359d8093c04958e4c7';
export default function apiService(search, numberPage, callBac) {
  const baseURL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${numberPage}&per_page=12&key=${KEY}`;
  fetch(baseURL)
    .then(response => response.json())
    .then(data => callBac(data))
    .then(() =>
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }),
    )
    .catch(error => console.log(error));
}
