import { t, Selector } from 'testcafe';

fixture`TestCafé Chromium Test`
  .page`http://localhost:8000/index.html`

for (let i = 0; i < 20; i++) {
  test(`${i} Page has title`, async () => {
    await t
      .expect(Selector('h1').count).eql(1)
      .expect(Selector('h1').innerText).eql('Hello, cruel world');
  });
}
