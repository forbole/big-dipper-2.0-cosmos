import { expect, test } from '@playwright/test';

test('proposals list page', async ({ page, isMobile }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click proposals section
  if (isMobile) await page.getByRole('button', { name: 'open navigation menu' }).first().click();
  await page.getByRole('link', { name: 'Proposals' }).first().click();
  await expect(page).toHaveURL(/\/proposals/);

  // Test single proposal url
  await page.goto(`./proposals/1`);
  await expect(page).toHaveURL(/\/proposals/);
});
