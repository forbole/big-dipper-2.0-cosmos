import { test, expect } from '@playwright/test';

test('params page', async ({ page }) => {
    const url = await page.goto('https://cosmos.bigdipper.live/');

    await page.getByRole('link', { name: 'Params' }).click();
    await expect(page).toHaveURL(/.*params/);

    await page.goto(`https://cosmos.bigdipper.live/params`);

});