import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";
const transactionHash = '5922EA68378A74989E95BF477BF107A120CA1D006FDDA84BC93630BBF9A8E75B'

test('transactions page', async ({ page }) => {
    // Test url
    await page.goto(deployURL);
    await expect(page).toHaveURL(deployURL);

    // Test click transactions section
    await page.getByRole('link', { name: 'Transactions' }).click();
    await expect(page).toHaveURL(/.*transactions/);

    // Test single transaction url
    await page.goto(`${deployURL}/transactions/${transactionHash}`);
    await expect(page).toHaveURL(`${deployURL}/transactions/${transactionHash}`);
});

