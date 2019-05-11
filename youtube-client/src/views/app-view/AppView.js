import './app-view.css';

export default class AppView {
  constructor(clipInfo) {
    this.titles = clipInfo.titles;
    this.pictures = clipInfo.pictures;
    this.descriptions = clipInfo.descriptions;
    this.authors = clipInfo.authors;
    this.dates = clipInfo.dates;
    this.clipId = clipInfo.clipId;
    this.viewCount = clipInfo.viewCount;
  }

  render() {
    document.querySelector('.search-wrap').insertAdjacentHTML('afterEnd',
      `<ul class='clips-wrap'><li class="clip"><div class="clip-title-wrap"><img class="clip-title-img" src="${this.pictures[0]}" alt="" width="320" height="180"><a class="title" href="https://www.youtube.com/watch?v=${this.clipId[0]}" target="_blank">${this.titles[0]}</a></div><div class="clip-info"><div class="clip-info-wrap"><div class="author-wrap"><span class="fas fa-user-alt"></span><span class="author">${this.authors[0].length <= 15 ? this.authors[0] : `${this.authors[0].slice(0, 15)}...`}</span></div><div class="date-wrap"><span class="fas fa-calendar-alt"></span><span class="date">${this.dates[0].slice(0, 10)}</span></div><div class="view-wrap"><span class="fas fa-eye"></span><span class="view">${this.viewCount[0]}</span></div></div><p class="description">${this.descriptions[0]}</p></div></li></ul>`);
  }
}
