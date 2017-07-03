import { Demo2Page } from './app.po';

describe('demo2 App', () => {
  let page: Demo2Page;

  beforeEach(() => {
    page = new Demo2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
