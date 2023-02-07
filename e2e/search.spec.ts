import { test } from '@playwright/test';
import { interceptRoutes, waitForReady } from './common';

const placeholder = 'Search for validator / tx hash / block height / address / @dtag';
const address = 'desmos17lca9smrdlwkznr92hypzrgsjkelnxear4qhyj';
const validatorAddress = 'desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq';
const transactionHash = '705351F036752DA23C43A4F36D184976EA441CDA4CB2DE9A1236223DE9081FE0';

test('search box', async ({ page }) => {
  await interceptRoutes(page);

  await page.goto('.');
  await waitForReady(page);

  // Test validator address search
  await page
    .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
    .first()
    .click();
  await page
    .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
    .first()
    .fill(validatorAddress);
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/validators/${validatorAddress}`) }),
    page
      .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
      .first()
      .press('Enter'),
  ]);
  await waitForReady(page);

  // Test address search
  await page
    .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
    .first()
    .click();
  await page
    .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
    .first()
    .fill(address);
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/accounts/${address}`) }),
    page
      .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
      .first()
      .press('Enter'),
  ]);
  await waitForReady(page);

  // Test transaction hash search
  await page
    .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
    .first()
    .click();
  await page
    .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
    .first()
    .fill(transactionHash);
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/transactions/${transactionHash}`) }),
    page
      .locator(`[placeholder=${JSON.stringify(placeholder)}]:visible`)
      .first()
      .press('Enter'),
  ]);
  await waitForReady(page);
});
