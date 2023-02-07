import { test } from '@playwright/test';
import { interceptRoutes, waitForMenuItemClick, waitForReady } from './common';

test('blocks page', async ({ page, isMobile }) => {
  await interceptRoutes(page);

  // Test single block url
  await page.goto(`./blocks/1`);
  await waitForReady(page);

  await waitForMenuItemClick(
    'ul > a.active[href="/blocks"]',
    page.getByRole('link', { name: 'Blocks' }),
    isMobile
  );
});
