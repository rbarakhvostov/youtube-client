import AppModel from '../model/AppModel';
import AppView from '../views/app-view/AppView';

// const { body } = document;
// const searchBar = document.querySelector('.search-bar');

export default class App {
  constructor(searchBar) {
    this.apiKey = 'AIzaSyBomVH6GyIEuV1erFH0snGINHk_jy0DbF0';
    this.searchBar = searchBar;
    // console.log(this.searchBar);
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=${this.searchBar.value}`,
    };
  }

  async start() {
    if (this.searchBar.value) {
      const model = new AppModel(this.state);
      console.log(model);
      // eslint-disable-next-line no-unused-vars
      const clipInfo = await model.getClipInfo();
      const view = new AppView();
      view.render();
    }
  }
}
