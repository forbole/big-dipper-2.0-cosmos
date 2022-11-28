import { expect, test } from '@playwright/test';

test('params page', async ({ page, isMobile }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click params section
  if (isMobile) await page.getByRole('button', { name: 'open navigation menu' }).first().click();
  await page.getByRole('link', { name: 'Params' }).first().click();
  await expect(page).toHaveURL(/\/params/);

  // Test params url
  await page.goto(`./params`);
  await expect(page).toHaveURL(/\/params/);
});
