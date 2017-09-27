import { AAssignment83Page } from './app.po';

describe('a-assignment83 App', function() {
  let page: AAssignment83Page;

  beforeEach(() => {
    page = new AAssignment83Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
