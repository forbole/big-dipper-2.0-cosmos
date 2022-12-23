import { expect, test } from '@playwright/test';

test('proposals list page', async ({ page, isMobile }) => {
  // Test url
  await Promise.all([page.waitForNavigation(), page.goto('.')]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click proposals section
  if (isMobile) await page.getByRole('button', { name: 'open navigation menu' }).first().click();

  await Promise.all([
    page.waitForNavigation({ url: /\/proposals/ }),
    page.getByRole('link', { name: 'Proposals' }).first().click(),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test single proposal url
  await Promise.all([page.waitForNavigation({ url: /\/proposals/ }), page.goto(`./proposals/1`)]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);
});
