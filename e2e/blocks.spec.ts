import { expect, test } from '@playwright/test';

test('blocks page', async ({ page, isMobile }) => {
  // Test url
  await Promise.all([page.waitForNavigation(), page.goto('.')]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test blocks url
  await Promise.all([
    page.waitForNavigation({ url: /\/blocks/ }),
    page.getByRole('link', { name: 'Blocks' }).first().click(),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  if (!isMobile) {
    // Test single block url
    await Promise.all([page.waitForNavigation({ url: /\/blocks\/1/ }), page.goto(`./blocks/1`)]);
    await expect(page.getByRole('progressbar')).toHaveCount(0);
  }
});
