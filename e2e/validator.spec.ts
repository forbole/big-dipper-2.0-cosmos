import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";

const validatorAddress = 'desmosvaloper134zrg6jn3a5l5jjpzv9eucdlw3nl2qelk0e992';
const rewardAddress = 'desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c'

test('validator page', async ({ page, context }) => {
    // Test validator url
    await page.goto(`${deployURL}/validators/${validatorAddress}`);
    await expect(page).toHaveURL(`${deployURL}/validators/${validatorAddress}`);

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
        expect(dialog.message()).toContain('Copied')
        await dialog.dismiss();
 })

    // Test copy reward address to clipboard
    await page.locator(':nth-match(#icon-copy_svg__Layer_1, 2)').click();
    const copyRewardAddress = await page.evaluate(async () => navigator.clipboard.readText());
    expect(typeof copyRewardAddress).toEqual('string');
    expect(copyRewardAddress).toEqual(rewardAddress);
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Copied')
        await dialog.dismiss();
    })
});

test('validator page tabs', async ({ page }) => {
    // Test validator url
    await page.goto(`${deployURL}/validators/${validatorAddress}`);
    await expect(page).toHaveURL(`${deployURL}/validators/${validatorAddress}`);

    // Test validator staking section
    await page.getByRole('tab', { name: /Delegations/ }).click()
    await page.getByRole('tab', { name: /Redelegations/ }).click();
    await page.getByRole('tab', { name: /Unbondings/ }).click();

    // Test validator connections section
    await page.getByRole('button', { name: /.\sConnection/ }).click();
    await page.getByRole('button', { name: /close/ }).click();
});
