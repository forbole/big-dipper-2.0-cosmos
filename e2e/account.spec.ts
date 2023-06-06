// import { expect, test } from '@playwright/test';
// import { interceptRoutes, waitForPopupClick, hasReadPermissions, waitForReady } from './common';

// const address = 'desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c';

// test('account page - copy addresses', async ({ page, context }) => {
//   await interceptRoutes(page);

//   // Test account url
//   await page.goto(`./accounts/${address}`);
//   await waitForReady(page);

//   if (await hasReadPermissions(context)) {
//     // Test copy address to clipboard
//     await page.locator('#icon-copy_svg__Layer_1').first().click();
//     const copy = await page.evaluate(async () => navigator.clipboard.readText());
//     expect(typeof copy).toEqual('string');
//     expect(copy).toEqual(address);
//     page.on('dialog', async (dialog) => {
//       expect(dialog.message()).toContain('Copied');
//       await dialog.accept();
//     });

//     // Test copy reward address to clipboard
//     await page.locator(':nth-match(#icon-copy_svg__Layer_1, 2)').first().click();
//     const copyRewardAddress = await page.evaluate(async () => navigator.clipboard.readText());
//     expect(typeof copyRewardAddress).toEqual('string');
//     expect(copyRewardAddress).toEqual(address);
//     page.on('dialog', async (dialog) => {
//       expect(dialog.message()).toContain('Copied');
//       await dialog.accept();
//     });
//   }
// });

// test('account page - share buttons', async ({ page }) => {
//   await interceptRoutes(page);

//   // Test account url
//   await page.goto(`./accounts/${address}`);
//   await waitForReady(page);

//   // Test share button
//   await page.locator('#icon-share_svg__Layer_1').first().click();

//   // // Test facebook button
//   await waitForPopupClick((p) => p.getByRole('button', { name: 'facebook' }), page);

//   // Test twitter button
//   await waitForPopupClick((p) => p.getByRole('button', { name: 'twitter' }), page);

//   // Test telegram button
//   await waitForPopupClick((p) => p.getByRole('button', { name: 'telegram' }), page);

//   // Test whatsapp button
//   await waitForPopupClick((p) => p.getByRole('button', { name: 'whatsapp' }), page);
// });

// test('account page tabs', async ({ page }) => {
//   await interceptRoutes(page);

//   // Test account url
//   await page.goto(`./accounts/${address}`);
//   await waitForReady(page);

//   // Test account staking section
//   await page
//     .getByRole('tab', { name: /Delegations/ })
//     .first()
//     .click();
//   await page
//     .getByRole('tab', { name: /Redelegations/ })
//     .first()
//     .click();
//   await page
//     .getByRole('tab', { name: /Unbondings/ })
//     .first()
//     .click();

//   // Test account connections section
//   // await page
//   //   .getByRole('button', { name: /.\sConnection/ })
//   //   .first()
//   //   .click();
//   await page.getByRole('button', { name: /close/ }).first().click();
// });
