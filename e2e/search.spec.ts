import { expect, test } from '@playwright/test';

const placeholder = 'Search for validator / tx hash / block height / address / @dtag';
const address = 'desmos17lca9smrdlwkznr92hypzrgsjkelnxear4qhyj';
const validatorAddress = 'desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq';
const transactionHash = '705351F036752DA23C43A4F36D184976EA441CDA4CB2DE9A1236223DE9081FE0';

test('search box', async ({ page }) => {
  // Test url
  await Promise.all([page.waitForNavigation(), page.goto('.')]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test validator address search
  await page.getByPlaceholder(placeholder).first().click();
  await page.getByPlaceholder(placeholder).first().fill(validatorAddress);
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/validators/${validatorAddress}`) }),
    page.getByPlaceholder(placeholder).first().press('Enter'),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test address search
  await page.getByPlaceholder(placeholder).first().click();
  await page.getByPlaceholder(placeholder).first().fill(address);
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/accounts/${address}`) }),
    page.getByPlaceholder(placeholder).first().press('Enter'),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test transaction hash search
  await page.getByPlaceholder(placeholder).first().click();
  await page.getByPlaceholder(placeholder).first().fill(transactionHash);
  await Promise.all([
    page.waitForNavigation({ url: new RegExp(`/transactions/${transactionHash}`) }),
    page.getByPlaceholder(placeholder).press('Enter'),
  ]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);
});
