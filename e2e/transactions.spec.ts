import { test, expect } from '@playwright/test';

const transactionHash = '5922EA68378A74989E95BF477BF107A120CA1D006FDDA84BC93630BBF9A8E75B';

test('transactions page', async ({ page }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click transactions section
  await page.getByRole('link', { name: 'Transactions' }).first().click();
  await expect(page).toHaveURL(/\/transactions/);

  // Test single transaction url
  await page.goto(`./transactions/${transactionHash}`);
  await expect(page).toHaveURL(new RegExp(`/transactions/${transactionHash}`));
});
