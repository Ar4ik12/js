import './styles.css';
import listImg from './template/listImg.hbs';
import apiService from './apiService.js';
import * as _ from 'lodash';

const ulGallery = document.querySelector('.gallery');
const buttonJs = document.querySelector('.button');
const formText = document.querySelector('.search-form');
const inputText = document.querySelector('#searh');

formText.addEventListener('submit', formValue);
buttonJs.addEventListener('click', btnImg);
buttonJs.setAttribute('disabled', true);

let page = 1;
let input = '';

function formValue() {
  event.preventDefault();
  if (page >= 1 && input !== inputText.value) {
    page = 1;
    ulGallery.innerHTML = '';
  }
  apiService(inputText.value, page, inputResult);
  buttonJs.removeAttribute('disabled');
  input = inputText.value;
}

function inputResult(data) {
  const markupOne = data.hits.map(elem => listImg(elem)).join('');
  ulGallery.insertAdjacentHTML('beforeend', markupOne);
}

function btnImg() {
  const searchQuery = input;
  apiService(searchQuery, (page += 1), inputResult);
}
