import { test, expect } from '@playwright/test';

test('transactions page', async ({ page }) => {
    await page.goto('https://desmos.bigdipper.live');

    await page.getByRole('link', { name: 'Transactions' }).click();
    await expect(page).toHaveURL(/.*transactions/);

    await page.goto(`https://desmos.bigdipper.live/transactions/5922EA68378A74989E95BF477BF107A120CA1D006FDDA84BC93630BBF9A8E75B`);
});

