import AppModel from '../model/AppModel';
import AppView from '../views/app-view/AppView';

export default class App {
  constructor(searchBar) {
    this.apiKey = 'AIzaSyBomVH6GyIEuV1erFH0snGINHk_jy0DbF0';
    this.searchBar = searchBar;
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=${this.searchBar.value}`,
    };
  }

  async start() {
    if (this.searchBar.value) {
      window.pageCounter = 1;
      window.loadingClipsPage_4 = 2;
      const model = new AppModel(this.state);
      this.clipInfo = await model.getClipInfo();
      const view = new AppView(this.clipInfo);
      view.render();
      document.querySelector('.clips-wrap').addEventListener('mouseup', this.startNext.bind(this));
      document.querySelector('.next-page').addEventListener('mouseup', this.startNext.bind(this));
    }
  }

  async startNext() {
    if (window.pageCounter === window.loadingClipsPage_4) {
      this.state = {
        url: `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&pageToken=${this.clipInfo.nextPageToken}&q=${this.searchBar.value}`,
      };
      const model = new AppModel(this.state);
      this.clipInfo = await model.getClipInfo();
      const view = new AppView(this.clipInfo);
      view.renderNextPage();
      window.loadingClipsPage_4 += 3;
    }
  }
}
