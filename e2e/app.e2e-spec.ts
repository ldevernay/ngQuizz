import { NgQuizzPage } from './app.po';

describe('ng-quizz App', () => {
  let page: NgQuizzPage;

  beforeEach(() => {
    page = new NgQuizzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
