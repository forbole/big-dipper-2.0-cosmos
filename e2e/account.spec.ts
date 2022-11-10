import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";

test('account page', async ({ page, context }) => {

    await page.goto(`${deployURL}/accounts/desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c`);
    await expect(page).toHaveURL(`${deployURL}/accounts/desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c`);

     try {
      // grant permission for chromium
      await context.grantPermissions(['clipboard-read']);
    } catch (error) {
      // skip for firefox
      return;
    }

    await page.locator('#icon-copy_svg__Layer_1').first().click();
    const copy = await page.evaluate(async () => navigator.clipboard.readText());
    expect(typeof copy).toEqual('string');
    expect(copy).toEqual('desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c');

    
    await page.locator('#icon-share_svg__Layer_1').first().click();
    const share = await page.evaluate(async () => navigator.clipboard.readText());
    expect(typeof share).toEqual('string');

});