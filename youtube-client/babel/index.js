import renderSearchBar from './views/search-bar-view/search-bar-view';
import App from './controller/App';
renderSearchBar();

function start() {
  console.log(this);
  new App(this).start();
}

const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', start);