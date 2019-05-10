export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipInfo(data) {
    const titles = data.items.map(el => el.snippet.title);
    const pictures = data.items.map(el => el.snippet.thumbnails.high.url);
    const descriptions = data.items.map(el => el.snippet.description);
    const authors = data.items.map(el => el.snippet.channelTitle);
    const dates = data.items.map(el => el.snippet.publishedAt);
    const videoId = data.items.map(el => el.id.videoId);
    // console.log(titles);
    // console.log(pictures);
    // console.log(descriptions);
    // console.log(authors);
    // console.log(dates);
    // console.log(videoId);
  }

  async getClipInfo() {
    const { url } = this.state;
    const responce = await fetch(url);
    const data = await responce.json();

    return AppModel.extractClipInfo(data);
  }
}
