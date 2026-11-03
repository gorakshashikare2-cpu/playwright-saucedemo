import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.locator('html').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('mansi bahnde ghasnar');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').dblclick();
  await page.getByTestId('text-input').fill('mansi phone bghnar');
  await page.getByTestId('text-input').press('Enter');
  await page.locator('html').click();
  await page.getByTestId('text-input').click();
  await page.getByRole('listitem').filter({ hasText: 'mansi bahnde ghasnar' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});