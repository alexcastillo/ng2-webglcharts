import { Ng2WebglchartsPage } from './app.po';

describe('ng2-webglcharts App', function() {
  let page: Ng2WebglchartsPage;

  beforeEach(() => {
    page = new Ng2WebglchartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
