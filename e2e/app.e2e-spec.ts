import { WltPage } from './app.po';

describe('wlt App', () => {
  let page: WltPage;

  beforeEach(() => {
    page = new WltPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
