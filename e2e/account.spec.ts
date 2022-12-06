import { expect, test } from '@playwright/test';

const address = 'desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c';

test('account page', async ({ page, context, isMobile }) => {
  // Test account url
  await page.goto(`./accounts/${address}`);
  await expect(page).toHaveURL(new RegExp(`/accounts/${address}`));
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Grant read permissions for clipboard
  try {
    // grant permission for chromium
    await context.grantPermissions(['clipboard-read']);
  } catch (error) {
    // skip for firefox
    return;
  }

  // Test copy address to clipboard
  await page.locator('#icon-copy_svg__Layer_1').first().click();
  const copy = await page.evaluate(async () => navigator.clipboard.readText());
  expect(typeof copy).toEqual('string');
  expect(copy).toEqual(address);
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Copied');
    await dialog.accept();
  });
  await page.waitForLoadState('domcontentloaded');

  // Test copy reward address to clipboard
  await page.locator(':nth-match(#icon-copy_svg__Layer_1, 2)').first().click();
  const copyRewardAddress = await page.evaluate(async () => navigator.clipboard.readText());
  expect(typeof copyRewardAddress).toEqual('string');
  expect(copyRewardAddress).toEqual(address);
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Copied');
    await dialog.accept();
  });
  await page.waitForLoadState('domcontentloaded');

  // Test share button
  await page.locator('#icon-share_svg__Layer_1').first().click();
  await page.waitForLoadState('domcontentloaded');

  // Test facebook button
  await Promise.all([
    page.waitForEvent('popup', (p) => /^https:\/\/[^/]+.facebook.com\/?/.test(p.url())),
    page.getByRole('button', { name: 'facebook' }).click(),
  ]);

  // Test twitter button
  await Promise.all([
    page.waitForEvent('popup', (p) => /^https:\/\/twitter\.com\/?/.test(p.url())),
    page.getByRole('button', { name: 'twitter' }).click(),
  ]);

  // Test telegram button
  await Promise.all([
    page.waitForEvent('popup', (p) => /^https:\/\/telegram\.me\/?/.test(p.url())),
    page.getByRole('button', { name: 'telegram' }).click(),
  ]);

  // Test whatsapp button
  await Promise.all([
    page.waitForEvent('popup', (p) => isMobile || /^https:\/\/web.whatsapp.com\/?/.test(p.url())),
    page.getByRole('button', { name: 'whatsapp' }).click(),
  ]);
});

test('account page tabs', async ({ page }) => {
  // Test account url
  await page.goto(`./accounts/${address}`);
  await expect(page).toHaveURL(new RegExp(`/accounts/${address}`));

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
