import { TechscanPage } from './app.po';

describe('techscan App', () => {
  let page: TechscanPage;

  beforeEach(() => {
    page = new TechscanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
