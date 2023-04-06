import { test } from '@playwright/test';
import { interceptRoutes, waitForMenuItemClick, waitForReady } from './common';

test('proposals list page', async ({ page }) => {
  await interceptRoutes(page);

  await page.goto('./proposals');
  await waitForReady(page);
});

test('proposals #1', async ({ page, isMobile }) => {
  await interceptRoutes(page);
  // Test single proposal url
  await page.goto(`./proposals/1`);
  await waitForReady(page);

  await waitForMenuItemClick(
    'ul > a.active[href="/proposals"]',
    page.getByRole('link', { name: 'Proposals' }),
    isMobile
  );
});
