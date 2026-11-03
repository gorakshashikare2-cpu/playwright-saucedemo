import { test, expect } from '@playwright/test';

test('Login to saucedemo application with valid credentials', async({page})=>
{
 await page.goto("https://www.saucedemo.com/");
 await page.locator("#user-name").fill("standard_user");
 await page.locator("#password").fill("secret_sauce");
 await page.locator('#login-button').click();

await page.waitForURL('https://www.saucedemo.com/inventory.html');

  const firstItem = page.locator('[data-test="inventory-item-name"]').first();
  
  await firstItem.waitFor({ state: 'visible' });
  await firstItem.click();
   await page.locator('#add-to-cart').click();
   await page.locator('#remove').click();
   await page.goto("https://www.saucedemo.com/inventory.html");
   await expect( page.locator('[data-test="inventory-item-desc"]').first()).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');

});