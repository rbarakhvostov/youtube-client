import AppModel from '../model/AppModel';
import AppView from '../views/app-view/AppView';

// const { body } = document;
// const searchBar = document.querySelector('.search-bar');

export default class App {
  constructor(searchBar) {
    this.apiKey = 'AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y';
    this.searchBar = searchBar;
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=${this.searchBar.value}`,
    };
  }

  async start() {
    if (this.searchBar.value) {
      const model = new AppModel(this.state);
      console.log(model);
      const clipInfo = await model.getClipInfo();
      const view = new AppView(clipInfo);
      view.render();
    }
  }
}
