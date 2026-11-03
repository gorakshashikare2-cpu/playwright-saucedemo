import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=playwright&rlz=1C1ONGR_enIN1120IN1120&oq=playwright&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIGCAQQBRhAMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg90gEIMjgyNGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'Generating tests', exact: true }).click();
  await page.getByRole('link', { name: 'Running and debugging tests', exact: true }).click();
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await page.getByRole('link', { name: 'VS Code' }).click();
});