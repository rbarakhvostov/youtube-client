export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static async getClipViewCount(clipId) {
    const apiKey = 'AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y';
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${clipId.join(',')}&part=statistics`;
    const responce = await fetch(url);
    const data = await responce.json();
    return data.items.map(el => el.statistics.viewCount);
  }

  static async extractClipInfo(data) {
    const clipInfo = {};
    clipInfo.titles = data.items.map(el => el.snippet.title);
    clipInfo.pictures = data.items.map(el => el.snippet.thumbnails.medium.url);
    clipInfo.descriptions = data.items.map(el => el.snippet.description);
    clipInfo.authors = data.items.map(el => el.snippet.channelTitle);
    clipInfo.dates = data.items.map(el => el.snippet.publishedAt);
    clipInfo.clipId = data.items.map(el => el.id.videoId);
    clipInfo.viewCount = await AppModel.getClipViewCount(clipInfo.clipId);
    console.log(clipInfo);
    return clipInfo;
  }

  async getClipInfo() {
    const { url } = this.state;
    const responce = await fetch(url);
    const data = await responce.json();
    return AppModel.extractClipInfo(data);
  }
}
