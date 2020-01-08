import renderSearchBar from './search-bar-view';
describe('renderSearchBar', () => {
  it('Should be render correctly', () => {
    renderSearchBar();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
  it('Should be an instance of Funtion', () => {
    expect(renderSearchBar).toBeInstanceOf(Function);
  });
});