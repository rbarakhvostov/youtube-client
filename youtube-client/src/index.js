import renderSearchBar from './views/search-bar-view/search-bar-view';
import './views/app-view/app-view.css';
import './views/search-bar-view/search-bar-view.css';
import App from './controller/App';

renderSearchBar();
function start() {
  new App(this).start();
}
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', start);
