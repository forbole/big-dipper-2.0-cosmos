import { expect, test } from '@playwright/test';

test('params page', async ({ page, isMobile }) => {
  // Test url
  await Promise.all([page.waitForNavigation(), page.goto('.')]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click params section
  if (isMobile) await page.getByRole('button', { name: 'open navigation menu' }).first().click();

  await Promise.all([
    page.waitForNavigation({ url: /\/params/ }),
    page.getByRole('link', { name: 'Params' }).first().click(),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test params url
  await Promise.all([page.waitForNavigation({ url: /\/params/ }), page.goto(`./params`)]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);
});
