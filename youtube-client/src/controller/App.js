import AppModel from '../model/AppModel';
import AppView from '../views/app-view/AppView';

// const { body } = document;
// const searchBar = document.querySelector('.search-bar');

export default class App {
  constructor(searchBar) {
    // this.clipInfo = {};
    this.apiKey = 'AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y';
    this.searchBar = searchBar;
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=${this.searchBar.value}`,
    };
  }

  async start() {
    if (this.searchBar.value) {
      const model = new AppModel(this.state);
      // console.log(model);
      this.clipInfo = await model.getClipInfo();
      // this.clipInfo = clipInfo;
      // console.log(this.clipInfo.nextPageToken);
      const view = new AppView(this.clipInfo);
      view.render();
      const slider = document.querySelector('.clips-wrap');
      // console.log(this.clipInfo);
      slider.addEventListener('contextmenu', this.startNext.bind(this));
    }
    // console.log(counter);
  }

  async startNext() {
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&pageToken=${this.clipInfo.nextPageToken}&q=${this.searchBar.value}`,
    };
    const nextModel = new AppModel(this.state);
    // console.log(nextModel);
    const nextClipInfo = await nextModel.getClipInfo();
    // console.log(nextClipInfo.nextPageToken);
    const nextView = new AppView(nextClipInfo);
    nextView.renderNextPage();
    this.clipInfo = nextClipInfo;
    console.log(this.state);
  }
}
// function startNext() {
//   app.startNext();
// }

// slider.addEventListener('mousemove', startNext);


// if (1) {
//   this.state = {
//     url: `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&pageToken=${clipInfo.nextPageToken}&q=${this.searchBar.value}`,
//   };
//   const nextModel = new AppModel(this.state);
//   // console.log(nextModel);
//   const nextClipInfo = await nextModel.getClipInfo();
//   // console.log(nextClipInfo.nextPageToken);
//   const nextView = new AppView(nextClipInfo);
//   nextView.renderNextPage();
//   clipInfo = nextClipInfo;
// }
