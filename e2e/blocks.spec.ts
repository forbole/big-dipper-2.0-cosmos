import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";

test('blocks page', async ({ page }) => {
    // Test url
    await page.goto(deployURL);
    await expect(page).toHaveURL(deployURL);

    // Test blocks url
    await page.getByRole('link', { name: 'Blocks' }).click();
    await expect(page).toHaveURL(/.*blocks/);

    // Test single block url
    await page.goto(`${deployURL}/blocks/1`);
    await expect(page).toHaveURL(/.*blocks\/1/);
});