import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";

test('home page', async ({ page }) => {
    // Test url
    await page.goto(deployURL);
    await expect(page).toHaveURL(deployURL);

    // Test a title
    await expect(page).toHaveTitle(/Big Dipper/);
    await expect(page).toHaveURL(deployURL);

    // Test 'See More' blocks button
    await page.getByRole('link', { name: 'see more blocks' }).first().click();
    await expect(page).toHaveURL(/.*blocks/);
  
    // Test 'See More' transactions button
    await page.getByRole('link', { name: 'see more txs' }).first().click();
    await expect(page).toHaveURL(/.*transactions/);
  
    // Test language change 
    await page.getByRole('button', { name: 'settings-button' }).click();
    await page.getByRole('button', { name: 'English' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

    // Test theme change 
    await page.getByRole('button', { name: 'settings-button' }).click();
    await page.getByRole('option', { name: 'Light' }).click();
    await page.getByRole('option', { name: 'Dark' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

    // Test date format change 
    await page.getByRole('button', { name: 'settings-button' }).click();
    await page.getByRole('button', { name: 'Locale' }).click();
    await page.getByRole('option', { name: 'UTC' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Test transactions format change 
    await page.getByRole('button', { name: 'settings-button' }).click();
    await page.getByRole('button', { name: 'Compact' }).click();
    await page.getByRole('option', { name: 'Detailed' }).click();
    await page.getByRole('button', { name: 'Save' }).click();

    await page.getByRole('link', { name: 'Overview' }).click();
    await expect(page).toHaveURL(/.*/);

});

