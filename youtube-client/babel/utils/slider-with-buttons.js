export default function makeSlider() {
  const slider = document.querySelector('.clips-wrap');
  const clip = document.querySelector('.clip:not(:first-child)');
  const clipWidth = +getComputedStyle(clip).width.slice(0, -2);
  let clipMarginLeft = +getComputedStyle(clip).marginLeft.slice(0, -2);
  let htmlWidth = +getComputedStyle(document.documentElement).width.slice(0, -2);
  let isDown = false;
  let startX;
  let scrollLeft;
  let x;
  let walk;
  const nextPage = document.querySelector('.next-page');
  const prevPage = document.querySelector('.prev-page');
  const currPage = document.querySelector('.current-page');
  currPage.textContent = 1;
  const prevTooltip = document.querySelector('.tooltip-prev');
  const nextTooltip = document.querySelector('.tooltip-next');
  const a = [1, 2, 3];
  a.flat();
  slider.addEventListener('mousedown', e => {
    e.preventDefault();
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX;
    ({
      scrollLeft
    } = slider);
  });
  slider.addEventListener('mouseleave', () => {
    slider.classList.remove('active');

    if (isDown) {
      if (walk <= -clipWidth) {
        slider.scrollLeft = scrollLeft + htmlWidth + clipMarginLeft + 0.4;
        window.pageCounter += 1;
        currPage.textContent = window.pageCounter;
      }

      if (walk > -clipWidth && walk < clipWidth && scrollLeft !== 0) {
        slider.scrollLeft += walk + 0.6;
      }

      if (walk > -clipWidth && walk < clipWidth && scrollLeft === 0) slider.scrollLeft = 0;

      if (walk >= clipWidth) {
        slider.scrollLeft = scrollLeft - htmlWidth - clipMarginLeft;
        window.pageCounter -= 1;
        if (window.pageCounter < 1) window.pageCounter = 1;
        currPage.textContent = window.pageCounter;
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
      currPage.textContent = window.pageCounter;
    }

    if (walk > -clipWidth && walk < clipWidth && scrollLeft !== 0) {
      slider.scrollLeft += walk + 0.6;
    }

    if (walk > -clipWidth && walk < clipWidth && scrollLeft === 0) slider.scrollLeft = 0;

    if (walk >= clipWidth) {
      slider.scrollLeft = scrollLeft - htmlWidth - clipMarginLeft;
      window.pageCounter -= 1;
      if (window.pageCounter < 1) window.pageCounter = 1;
      currPage.textContent = window.pageCounter;
    }

    walk = 0;
  });
  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    x = e.pageX;
    walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });
  nextPage.addEventListener('mouseup', () => {
    ({
      scrollLeft
    } = slider);
    slider.scrollLeft = scrollLeft + htmlWidth + clipMarginLeft + 0.4;
    window.pageCounter += 1;
    currPage.textContent = window.pageCounter;
    nextTooltip.style.opacity = 0;
  });
  nextPage.addEventListener('mousedown', () => {
    nextTooltip.textContent = +currPage.textContent + 1;
    nextTooltip.style.opacity = 1;
  });
  nextPage.addEventListener('mouseleave', () => {
    nextTooltip.style.opacity = 0;
  });
  prevPage.addEventListener('mouseup', () => {
    ({
      scrollLeft
    } = slider);
    slider.scrollLeft = scrollLeft - htmlWidth - clipMarginLeft;
    window.pageCounter -= 1;
    if (window.pageCounter < 1) window.pageCounter = 1;
    currPage.textContent = window.pageCounter;
    prevTooltip.style.opacity = 0;
  });
  prevPage.addEventListener('mousedown', () => {
    if (currPage.textContent !== '1') {
      prevTooltip.textContent = currPage.textContent - 1;
      prevTooltip.style.opacity = 1;
    }
  });
  prevPage.addEventListener('mouseleave', () => {
    prevTooltip.style.opacity = 0;
  });
  window.addEventListener('resize', () => {
    htmlWidth = +getComputedStyle(document.documentElement).width.slice(0, -2);
    clipMarginLeft = +getComputedStyle(clip).marginLeft.slice(0, -2);
  });
  document.addEventListener('mousemove', e => {
    e.preventDefault();
  });
}