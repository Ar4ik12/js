import menuBar from './menu.json';
import postFeedBar from './templates/post-feed-items.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuJs = {
  postFeed: document.querySelector('.js-menu'),
};

function menuAll(menuBar) {
  const menuAllBar = menuBar.map(menuBars => postFeedBar(menuBars)).join('');
  menuJs.postFeed.insertAdjacentHTML('beforeend', menuAllBar);
}
menuAll(menuBar);

const inputJs = document.querySelector('.js-switch-input');

function onClic(e) {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light-theme');
  }
}
inputJs.addEventListener('change', onClic);

function savedStoreg() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    inputJs.checked = true;
  } else {
    localStorage.setItem('theme', 'light-theme');
    document.body.classList.add(Theme.LIGHT);
  }
}
savedStoreg();
