import './app-view.css';
import renderSearchBar from '../search-bar-view/search-bar-view';


export default class AppView {
  constructor(body) {
    this.body = body;
  }

  render() {
    renderSearchBar(this.body);
  }
}
