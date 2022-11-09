import { test, expect } from '@playwright/test';

test('proposals page', async ({ page }) => {
    const url = await page.goto('https://cosmos.bigdipper.live/');

    await page.getByRole('link', { name: 'Proposals' }).click();
    await expect(page).toHaveURL(/.*proposals/);

    await page.goto(`https://cosmos.bigdipper.live/proposals/1`);
});