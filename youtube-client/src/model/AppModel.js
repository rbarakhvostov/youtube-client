export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipTitles(data) {
    return data.items.map(clip => clip.snippet.title);
  }

  async getClipTitles() {
    const { url } = this.state;
    const responce = await fetch(url);
    const data = await responce.json();

    return AppModel.extractClipTitles(data);
  }
}
