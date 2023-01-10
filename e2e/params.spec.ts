import { test } from '@playwright/test';
import { abortLoadingAssets, waitForMenuItemClick, waitForReady } from './common';

test('params page', async ({ page, isMobile }) => {
  await abortLoadingAssets(page);

  // Test params url
  await page.goto(`.`);
  await waitForReady(page);

  await waitForMenuItemClick(
    'ul > a.active[href="/params"]',
    page.getByRole('link', { name: 'Params' }),
    isMobile
  );
});
