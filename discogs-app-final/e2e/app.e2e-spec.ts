import { DiscogsAppFinalPage } from './app.po';

describe('discogs-app-final App', () => {
  let page: DiscogsAppFinalPage;

  beforeEach(() => {
    page = new DiscogsAppFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
