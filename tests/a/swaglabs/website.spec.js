import { test, expect } from '@playwright/test';

test.describe('1st swag labs test script', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');

    await page.locator('//input[@type="password"]').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();
    

    await page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click();

    await page.locator('//a[@class="shopping_cart_link"]').click();

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});