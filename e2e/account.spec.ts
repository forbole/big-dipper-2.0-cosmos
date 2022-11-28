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
  const [facebook] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'facebook' }).click(),
  ]);
  await expect(facebook).toHaveURL(/https:\/\/\S+.facebook.com\/*/);

  // Test twitter button
  const [twitter] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'twitter' }).click(),
  ]);
  await expect(twitter).toHaveURL(/https:\/\/twitter.com\/*/);

  // Test telegram button
  const [telegram] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'telegram' }).click(),
  ]);
  await expect(telegram).toHaveURL(/https:\/\/telegram.me\/*/);

  // Test whatsapp button
  const [whatsapp] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'whatsapp' }).click(),
  ]);
  if (!isMobile) await expect(whatsapp).toHaveURL(/https:\/\/web.whatsapp.com\/*/);
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
