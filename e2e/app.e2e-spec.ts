import { SafariNgZoneIssueClientPage } from './app.po';

describe('safari-client App', function() {
  let page: SafariNgZoneIssueClientPage;

  beforeEach(() => {
    page = new SafariNgZoneIssueClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
