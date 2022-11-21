import { test, expect } from '@playwright/test';

test('proposals list page', async ({ page }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click proposals section
  await page.getByRole('link', { name: 'Proposals' }).first().click();
  await expect(page).toHaveURL(/\/proposals/);

  // Test single proposal url
  await page.goto(`./proposals/1`);
  await expect(page).toHaveURL(/\/proposals/);
});
