import { test, expect } from '@playwright/test';

test('params page', async ({ page }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click params section
  await page.getByRole('link', { name: 'Params' }).first().click();
  await expect(page).toHaveURL(/\/params/);

  // Test params url
  await page.goto(`./params`);
  await expect(page).toHaveURL(/\/params/);
});
