import { test } from '@playwright/test';
import { interceptRoutes, waitForClick, waitForMenuItemClick, waitForReady } from './common';

const transactionHash = '5922EA68378A74989E95BF477BF107A120CA1D006FDDA84BC93630BBF9A8E75B';

test('transactions list page', async ({ page, isMobile }) => {
  await interceptRoutes(page);

  await page.goto(`.`);
  await waitForReady(page);

  await waitForMenuItemClick(
    'ul > a.active[href="/transactions"]',
    page.getByRole('link', { name: 'Transactions' }),
    isMobile
  );
});

test(`transactions page ${transactionHash}`, async ({ page }) => {
  await interceptRoutes(page);

  await page.goto(`./transactions/${transactionHash}`);
  await waitForReady(page);
});
