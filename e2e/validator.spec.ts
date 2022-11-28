import { expect, test } from '@playwright/test';

const validatorAddress = 'desmosvaloper134zrg6jn3a5l5jjpzv9eucdlw3nl2qelk0e992';
const rewardAddress = 'desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c';

test('validator page', async ({ page, context }) => {
  // Test validator url
  await page.goto(`./validators/${validatorAddress}`);
  await expect(page).toHaveURL(new RegExp(`/validators/${validatorAddress}`));
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Grant read permissions for clipboard
  try {
    // grant permission for chromium
    await context.grantPermissions(['clipboard-read']);
  } catch (error) {
    // skip for firefox
    return;
  }

  // Test copy operator address to clipboard
  await page.locator('#icon-copy_svg__Layer_1').first().click();
  const copyOperatorAddress = await page.evaluate(async () => navigator.clipboard.readText());
  expect(typeof copyOperatorAddress).toEqual('string');
  expect(copyOperatorAddress).toEqual(validatorAddress);
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Copied');
    await dialog.dismiss();
  });
  await page.waitForLoadState('domcontentloaded');

  // Test copy reward address to clipboard
  await page.locator(':nth-match(#icon-copy_svg__Layer_1, 2)').first().click();
  const copyRewardAddress = await page.evaluate(async () => navigator.clipboard.readText());
  expect(typeof copyRewardAddress).toEqual('string');
  expect(copyRewardAddress).toEqual(rewardAddress);
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Copied');
    await dialog.dismiss();
  });
  await page.waitForLoadState('domcontentloaded');
});

test('validator page tabs', async ({ page }) => {
  // Test validator url
  await page.goto(`./validators/${validatorAddress}`);
  await expect(page).toHaveURL(new RegExp(`/validators/${validatorAddress}`));

  // Test validator staking section
  await page.getByRole('tab', { name: /Delegations/ }).click();
  await page
    .getByRole('tab', { name: /Redelegations/ })
    .first()
    .click();
  await page
    .getByRole('tab', { name: /Unbondings/ })
    .first()
    .click();

  // Test validator connections section
  await page
    .getByRole('button', { name: /.\sConnection/ })
    .first()
    .click();
  await page.getByRole('button', { name: /close/ }).first().click();
});
