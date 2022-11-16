import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";
const address = 'desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c';

test('account page', async ({ page, context }) => {
    // Test account url
    await page.goto(`${deployURL}/accounts/${address}`);
    await expect(page).toHaveURL(`${deployURL}/accounts/${address}`);

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
    await page.waitForLoadState();
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Copied')
        await dialog.accept();
    })

     // Test copy reward address to clipboard
    await page.locator(':nth-match(#icon-copy_svg__Layer_1, 2)').click();
    const copyRewardAddress = await page.evaluate(async () => navigator.clipboard.readText());
    expect(typeof copyRewardAddress).toEqual('string');
    expect(copyRewardAddress).toEqual(address);
    await page.waitForLoadState();
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('Copied')
        await dialog.accept();
    })

    // Test share button
    await page.locator('#icon-share_svg__Layer_1').first().click();
    await page.waitForLoadState();
    
    // Test facebook button 
    const [facebook] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'facebook' }).click(),
    ])
    await expect(facebook).toHaveURL(/https:\/\/web.facebook.com\/*/);

    // Test twitter button 
    const [twitter] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'twitter' }).click(),
    ])
    await expect(twitter).toHaveURL(/https:\/\/twitter.com\/*/);

    // Test telegram button 
    const [telegram] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'telegram' }).click(),
    ])
    await expect(telegram).toHaveURL(/https:\/\/telegram.me\/*/);

    // Test whatsapp button 
    const [whatsapp] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'whatsapp' }).click(),
    ])
    await expect(whatsapp).toHaveURL(/https:\/\/web.whatsapp.com\/*/);

});

test('account page tabs', async ({ page }) => {
    // Test account url
    await page.goto(`${deployURL}/accounts/${address}`);
    await expect(page).toHaveURL(`${deployURL}/accounts/${address}`);

    // Test account staking section
    await page.getByRole('tab', { name: /Delegations/ }).click()
    await page.getByRole('tab', { name: /Redelegations/ }).click();
    await page.getByRole('tab', { name: /Unbondings/ }).click();

    // Test account connections section
    await page.getByRole('button', { name: /.\sConnection/ }).click();
    await page.getByRole('button', { name: /close/ }).click();
});