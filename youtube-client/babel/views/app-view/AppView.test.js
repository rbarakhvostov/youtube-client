import AppView from './AppView';
describe('AppView', () => {
  it('Should return an object with info', () => {
    const clipInfo = {
      titles: ['titleA', 'titleB', 'titleC'],
      pictures: ['a.jpg', 'b.jpg', 'c.jpg'],
      descriptions: ['descriptionA', 'descriptionB', 'descriptionC'],
      authors: ['authorA', 'authorB', 'authorC'],
      dates: ['0000-00-00', '1111-11-11', '2222-22-22'],
      clipId: ['idA', 'idB', 'idC'],
      nextPageToken: 'AABBCC',
      viewCount: [111, 222, 333]
    };
    const res = new AppView(clipInfo);
    expect(res).toEqual({
      titles: ['titleA', 'titleB', 'titleC'],
      pictures: ['a.jpg', 'b.jpg', 'c.jpg'],
      descriptions: ['descriptionA', 'descriptionB', 'descriptionC'],
      authors: ['authorA', 'authorB', 'authorC'],
      dates: ['0000-00-00', '1111-11-11', '2222-22-22'],
      clipId: ['idA', 'idB', 'idC'],
      viewCount: [111, 222, 333]
    });
  });
});
describe('AppView.prototype.render', () => {
  it('Should be an instance of Funtion', () => {
    expect(AppView.prototype.render).toBeInstanceOf(Function);
  });
});
describe('AppView.prototype.renderNextChunk', () => {
  it('Should be an instance of Funtion', () => {
    expect(AppView.prototype.renderNextChunk).toBeInstanceOf(Function);
  });
});