import { expect, test } from '@playwright/test';

const transactionHash = '5922EA68378A74989E95BF477BF107A120CA1D006FDDA84BC93630BBF9A8E75B';

test('transactions page', async ({ page, isMobile }) => {
  // Test url
  await Promise.all([page.waitForNavigation(), page.goto('.')]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click transactions section
  if (isMobile) await page.getByRole('button', { name: 'open navigation menu' }).first().click();
  await Promise.all([
    page.waitForNavigation({ url: /\/transactions/ }),
    page.getByRole('link', { name: 'Transactions' }).first().click(),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test single transaction url
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/transactions/${transactionHash}`) }),
    page.goto(`./transactions/${transactionHash}`),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);
});
