import renderSearchBar from './views/search-bar-view/search-bar-view';
import App from './controller/App';

renderSearchBar();
// const app = new App();
// console.log(app);
// app.start();
// const app = new App(this);
function start() {
  new App(this).start();
}
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', start);
