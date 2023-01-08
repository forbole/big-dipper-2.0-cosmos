import { BrowserContext, expect, Locator, Page, test } from '@playwright/test';

const address = 'desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c';

async function hasReadPermissions(context: BrowserContext) {
  // Grant read permissions for clipboard
  try {
    // grant permission for chromium
    await context.grantPermissions(['clipboard-read']);
    return true;
  } catch (error) {
    // skip for firefox
    return false;
  }
}

async function clickPopup(page: Page, selector: (p: Page) => Locator) {
  // Test facebook button
  await Promise.all([page.waitForEvent('popup'), selector(page).click()]).then(([popup]) =>
    popup.close()
  );
}

test('account page - copy addresses', async ({ page, context }) => {
  // Test account url
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/accounts/${address}`) }),
    page.goto(`./accounts/${address}`),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  if (await hasReadPermissions(context)) {
    // Test copy address to clipboard
    await page.locator('#icon-copy_svg__Layer_1').first().click();
    const copy = await page.evaluate(async () => navigator.clipboard.readText());
    expect(typeof copy).toEqual('string');
    expect(copy).toEqual(address);
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toContain('Copied');
      await dialog.accept();
    });

    // Test copy reward address to clipboard
    await page.locator(':nth-match(#icon-copy_svg__Layer_1, 2)').first().click();
    const copyRewardAddress = await page.evaluate(async () => navigator.clipboard.readText());
    expect(typeof copyRewardAddress).toEqual('string');
    expect(copyRewardAddress).toEqual(address);
    page.on('dialog', async (dialog) => {
      expect(dialog.message()).toContain('Copied');
      await dialog.accept();
    });
  }
});

test('account page - share buttons', async ({ page, isMobile }) => {
  // Test account url
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/accounts/${address}`) }),
    page.goto(`./accounts/${address}`),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test share button
  await page.locator('#icon-share_svg__Layer_1').first().click();

  // Test facebook button
  await clickPopup(page, (p) => p.getByRole('button', { name: 'facebook' }));

  // Test twitter button
  await clickPopup(page, (p) => p.getByRole('button', { name: 'twitter' }));

  // Test telegram button
  await clickPopup(page, (p) => p.getByRole('button', { name: 'telegram' }));

  // Test whatsapp button
  await clickPopup(page, (p) => p.getByRole('button', { name: 'whatsapp' }));
});

test('account page tabs', async ({ page }) => {
  // Test account url
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/accounts/${address}`) }),
    page.goto(`./accounts/${address}`),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test account staking section
  await page
    .getByRole('tab', { name: /Delegations/ })
    .first()
    .click();
  await page
    .getByRole('tab', { name: /Redelegations/ })
    .first()
    .click();
  await page
    .getByRole('tab', { name: /Unbondings/ })
    .first()
    .click();

  // Test account connections section
  await page
    .getByRole('button', { name: /.\sConnection/ })
    .first()
    .click();
  await page.getByRole('button', { name: /close/ }).first().click();
});
