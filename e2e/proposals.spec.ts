import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";

test('proposals list page', async ({ page }) => {
    // Test url
    await page.goto(deployURL);
    await expect(page).toHaveURL(deployURL);

    // Test click proposals section
    await page.getByRole('link', { name: 'Proposals' }).click();
    await expect(page).toHaveURL(/.*proposals/);

    // Test single proposal url
    await page.goto(`${deployURL}/proposals/1`);
    await expect(page).toHaveURL(`${deployURL}/proposals/1`);
});