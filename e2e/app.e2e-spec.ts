import { WebglPage } from './app.po';

describe('webgl App', function() {
  let page: WebglPage;

  beforeEach(() => {
    page = new WebglPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
