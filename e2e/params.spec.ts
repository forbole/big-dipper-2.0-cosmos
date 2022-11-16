import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";

test('params page', async ({ page }) => {
    // Test url
    await page.goto(deployURL);
    await expect(page).toHaveURL(deployURL);

    // Test click params section
    await page.getByRole('link', { name: 'Params' }).click();
    await expect(page).toHaveURL(/.*params/);

    // Test params url
    await page.goto(`${deployURL}/params`);
    await expect(page).toHaveURL(`${deployURL}/params`);
});