let page;
beforeEach(()=>{
  page = await browser.newPage();
})
afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto('https://github.com/team');
  });  
  
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  }, 60000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  }, 60000);
});
test("The page featurers title", async () => {  
  await page.goto("https://github.com/features");
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Features | GitHub · GitHub');
}, 60000)
test("The page enterprise title", async () => {  
  await page.goto("https://github.com/enterprise");
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Enterprise · A smarter way to work together · GitHub');
}, 60000)
test("The page pricing title", async () => {
  await page.goto("https://github.com/pricing");
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Pricing · Plans for every developer · GitHub');
},60000)

test("Netology", async () => {
  await page.goto("https://netology.ru/");
  await page.waitForSelector('h1');
  const title2 = await page.title();
  expect(title2).toEqual('Нетология – курсы и обучение интернет-профессиям онлайн');
}, 60000)