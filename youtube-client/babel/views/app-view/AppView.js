import makeSlider from '../../utils/slider-with-buttons';
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
    if (document.querySelector('.clips-wrap')) {
      document.body.removeChild(document.querySelector('.clips-wrap'));
      document.body.removeChild(document.querySelector('.buttons-wrap'));
    }

    document.querySelector('.search-wrap').insertAdjacentHTML('afterEnd', '<ul class="clips-wrap"></ul>');

    for (let i = 0; i < 15; i += 1) {
      document.querySelector('.clips-wrap').insertAdjacentHTML('beforeEnd', "<li class=\"clip\"><div class=\"clip-title-wrap\"><img class=\"clip-title-img\" src=\"".concat(this.pictures[i], "\" alt=\"\" width=\"320\" height=\"180\"><a class=\"title\" href=\"https://www.youtube.com/watch?v=").concat(this.clipId[i], "\" target=\"_blank\">").concat(this.titles[i], "</a></div><div class=\"clip-info\"><div class=\"clip-info-wrap\"><div class=\"author-wrap\"><span class=\"fas fa-user-alt\"></span><span class=\"author\">").concat(this.authors[i].length <= 17 ? this.authors[i] : "".concat(this.authors[i].slice(0, 14), "..."), "</span></div><div class=\"date-wrap\"><span class=\"fas fa-calendar-alt\"></span><span class=\"date\">").concat(this.dates[i].slice(0, 10), "</span></div><div class=\"view-wrap\"><span class=\"fas fa-eye\"></span><span class=\"view\">").concat(this.viewCount[i], "</span></div></div><p class=\"description\">").concat(this.descriptions[i], "</p></div></li>"));
    }

    document.querySelector('.clips-wrap').insertAdjacentHTML('afterEnd', '<div class="buttons-wrap"><span class="tooltip tooltip-prev"></span><span class="tooltip tooltip-next"></span><button class="button-page prev-page"><span class="fas fa-caret-left"></span></button><span class="current-page"></span><button class="button-page next-page"><span class="fas fa-caret-right"></span></button></div>');
    makeSlider();
  }

  renderNextChunk() {
    for (let i = 0; i < 15; i += 1) {
      document.querySelector('.clips-wrap').insertAdjacentHTML('beforeEnd', "<li class=\"clip\"><div class=\"clip-title-wrap\"><img class=\"clip-title-img\" src=\"".concat(this.pictures[i], "\" alt=\"\" width=\"320\" height=\"180\"><a class=\"title\" href=\"https://www.youtube.com/watch?v=").concat(this.clipId[i], "\" target=\"_blank\">").concat(this.titles[i], "</a></div><div class=\"clip-info\"><div class=\"clip-info-wrap\"><div class=\"author-wrap\"><span class=\"fas fa-user-alt\"></span><span class=\"author\">").concat(this.authors[i].length <= 17 ? this.authors[i] : "".concat(this.authors[i].slice(0, 14), "..."), "</span></div><div class=\"date-wrap\"><span class=\"fas fa-calendar-alt\"></span><span class=\"date\">").concat(this.dates[i].slice(0, 10), "</span></div><div class=\"view-wrap\"><span class=\"fas fa-eye\"></span><span class=\"view\">").concat(this.viewCount[i], "</span></div></div><p class=\"description\">").concat(this.descriptions[i], "</p></div></li>"));
    }
  }

}