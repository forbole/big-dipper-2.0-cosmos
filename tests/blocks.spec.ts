import { test, expect } from '@playwright/test';

test('blocks page', async ({ page }) => {
    const url = await page.goto('https://cosmos.bigdipper.live/');

    await page.getByRole('link', { name: 'Blocks' }).click();
    await expect(page).toHaveURL(/.*blocks/);

    await page.goto(`https://cosmos.bigdipper.live/blocks/1`);

});