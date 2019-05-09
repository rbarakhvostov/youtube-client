import AppModel from '../model/AppModel';
import AppView from '../views/app-view/AppViews';

const apiKey = 'AIzaSyBomVH6GyIEuV1erFH0snGINHk_jy0DbF0';
const { body } = document;

export default class App {
  constructor() {
    this.state = {
      url: `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=15&q=`,
    };
  }

  async start() {
    const model = new AppModel(this.state);
    // eslint-disable-next-line no-unused-vars
    const clipTitles = await model.getClipTitles();
    const view = new AppView(body);
    view.render();
  }
}
