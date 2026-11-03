import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.opencart.com/index.php?route=cms/demo');
  await page.getByRole('heading', { name: 'OpenCart Demonstration' }).click();
  await page.getByText('You can try OpenCart without').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View Store Front' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://demo.opencart.com/');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View Administration Login &' }).click();
  const page2 = await page2Promise;
  await page1.goto('https://demo.opencart.com/');
  await page.getByRole('link', { name: 'Resources' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#navbar-collapse-header').getByRole('link', { name: 'GitHub', exact: true }).click();
  const page3 = await page3Promise;
  await page1.goto('https://demo.opencart.com/?__cf_chl_rt_tk=jhjJ8xuNOHYDyV_byO5e.E5i9nAruOkouLlF.5TW24s-1783530161-1.0.1.1-HVtc3NtNBlN61cDek0U1Ao6GtQX_chGxw1O72RLoGtw');
  await page3.goto('https://github.com/opencart/opencart');
});