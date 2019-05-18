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
    }
    document.querySelector('.search-wrap').insertAdjacentHTML('afterEnd', '<ul class="clips-wrap"></ul>');
    for (let i = 0; i < 15; i += 1) {
      document.querySelector('.clips-wrap').insertAdjacentHTML('beforeEnd',
        `<li class="clip"><div class="clip-title-wrap"><img class="clip-title-img" src="${this.pictures[i]}" alt="" width="320" height="180"><a class="title" href="https://www.youtube.com/watch?v=${this.clipId[i]}" target="_blank">${this.titles[i]}</a></div><div class="clip-info"><div class="clip-info-wrap"><div class="author-wrap"><span class="fas fa-user-alt"></span><span class="author">${this.authors[i].length <= 17 ? this.authors[i] : `${this.authors[i].slice(0, 14)}...`}</span></div><div class="date-wrap"><span class="fas fa-calendar-alt"></span><span class="date">${this.dates[i].slice(0, 10)}</span></div><div class="view-wrap"><span class="fas fa-eye"></span><span class="view">${this.viewCount[i]}</span></div></div><p class="description">${this.descriptions[i]}</p></div></li>`);
    }

    document.addEventListener('mousemove', (e) => {
      e.preventDefault();
    });

    // document.addEventListener('dblclick', (e) => {
    //   e.preventDefault();
    // });

    /* slider */
    const slider = document.querySelector('.clips-wrap');
    const clip = document.querySelector('.clip:not(:first-child)');
    const clipWidth = +(getComputedStyle(clip).width).slice(0, -2);
    let clipMarginLeft = +(getComputedStyle(clip).marginLeft).slice(0, -2);
    let htmlWidth = +(getComputedStyle(document.documentElement).width).slice(0, -2);
    let isDown = false;
    let startX;
    let scrollLeft;
    let x;
    let walk;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX; // - slider.offsetLeft;
      ({ scrollLeft } = slider);
    });

    slider.addEventListener('mouseleave', () => {
      slider.classList.remove('active');
      if (isDown) {
        if (walk <= -clipWidth) {
          slider.scrollLeft = scrollLeft + htmlWidth + clipMarginLeft + 0.4;
          window.pageCounter += 1;
        }
        if (walk > -clipWidth && walk < clipWidth && scrollLeft !== 0) {
          slider.scrollLeft += walk + 0.6;
        }
        if (walk > -clipWidth && walk < clipWidth && scrollLeft === 0) slider.scrollLeft = 0;

        if (walk >= clipWidth) {
          slider.scrollLeft = scrollLeft - htmlWidth - clipMarginLeft;
          window.pageCounter -= 1;
          if (window.pageCounter < 1) window.pageCounter = 1;
        }
      }
      isDown = false;
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
      if (walk <= -clipWidth) {
        slider.scrollLeft = scrollLeft + htmlWidth + clipMarginLeft + 0.4;
        window.pageCounter += 1;
      }
      if (walk > -clipWidth && walk < clipWidth && scrollLeft !== 0) {
        slider.scrollLeft += walk + 0.6;
      }
      if (walk > -clipWidth && walk < clipWidth && scrollLeft === 0) slider.scrollLeft = 0;

      if (walk >= clipWidth) {
        slider.scrollLeft = scrollLeft - htmlWidth - clipMarginLeft;
        window.pageCounter -= 1;
        if (window.pageCounter < 1) window.pageCounter = 1;
      }
      walk = 0;
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      x = e.pageX; // - slider.offsetLeft;
      walk = x - startX;
      // offset = +(getComputedStyle(clip).marginLeft).slice(0, -2);
      slider.scrollLeft = scrollLeft - walk;
    });

    window.addEventListener('resize', () => {
      htmlWidth = +(getComputedStyle(document.documentElement).width).slice(0, -2);
      clipMarginLeft = +(getComputedStyle(clip).marginLeft).slice(0, -2);
    });
  }

  renderNextPage() {
    for (let i = 0; i < 15; i += 1) {
      document.querySelector('.clips-wrap').insertAdjacentHTML('beforeEnd',
        `<li class="clip"><div class="clip-title-wrap"><img class="clip-title-img" src="${this.pictures[i]}" alt="" width="320" height="180"><a class="title" href="https://www.youtube.com/watch?v=${this.clipId[i]}" target="_blank">${this.titles[i]}</a></div><div class="clip-info"><div class="clip-info-wrap"><div class="author-wrap"><span class="fas fa-user-alt"></span><span class="author">${this.authors[i].length <= 17 ? this.authors[i] : `${this.authors[i].slice(0, 14)}...`}</span></div><div class="date-wrap"><span class="fas fa-calendar-alt"></span><span class="date">${this.dates[i].slice(0, 10)}</span></div><div class="view-wrap"><span class="fas fa-eye"></span><span class="view">${this.viewCount[i]}</span></div></div><p class="description">${this.descriptions[i]}</p></div></li>`);
    }
  }
}
