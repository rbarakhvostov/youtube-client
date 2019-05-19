export default function renderSearchBar() {
  const { body } = document;
  body.insertAdjacentHTML('afterBegin',
    '<div class="search-wrap"><input class="search-bar" id="search-bar" type="text" placeholder="search"><label class="search-bar-label" for="search-bar"><span class="fas fa-search"></span></label></div>');
}
