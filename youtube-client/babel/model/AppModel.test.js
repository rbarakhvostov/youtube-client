import AppModel from './AppModel';
describe('AppModel', () => {
  it('Should return an object with url', () => {
    const state = {
      url: 'url'
    };
    const res = new AppModel(state);
    expect(res).toEqual({
      state: {
        url: 'url'
      }
    });
  });
});
describe('AppModel.extractClipInfo', () => {
  it('Should be an instance of Funtion', () => {
    expect(AppModel.extractClipInfo).toBeInstanceOf(Function);
  });
});