import { ProjectShopJPage } from './app.po';

describe('project-shop-j App', function() {
  let page: ProjectShopJPage;

  beforeEach(() => {
    page = new ProjectShopJPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
