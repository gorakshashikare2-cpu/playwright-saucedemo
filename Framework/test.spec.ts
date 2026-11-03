import{test, expect} from '@playwright/test'

test('Login to saucedemo application with valid credentials', async({page})=>
{
 await page.goto("https://www.saucdemo.com/");
 await page.locator("#user-name").fill("standard_user");
 await page.locator("#password").fill("secret_sauce");


}