import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
    await page.goto('https://cosmos.bigdipper.live');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Big Dipper/);

    await page.getByRole('link', { name: 'See More' }).first().click();
    await expect(page).toHaveURL(/.*blocks/);

    await page.getByRole('link', { name: 'Overview' }).click();
    await expect(page).toHaveURL(/.*/);

});

