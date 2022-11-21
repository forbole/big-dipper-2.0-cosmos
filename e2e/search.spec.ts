import { test, expect } from '@playwright/test';

const placeholder = 'Search for validator / tx hash / block height / address / @dtag';
const address = 'desmos17lca9smrdlwkznr92hypzrgsjkelnxear4qhyj';
const validatorAddress = 'desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq';
const transactionHash = '705351F036752DA23C43A4F36D184976EA441CDA4CB2DE9A1236223DE9081FE0';

test('search box', async ({ page }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test validator address search
  await page.getByPlaceholder(placeholder).first().click();
  await page.getByPlaceholder(placeholder).first().fill(validatorAddress);
  await page.getByPlaceholder(placeholder).first().press('Enter');
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(new RegExp(`/validators/${validatorAddress}`));

  // Test address search
  await page.getByPlaceholder(placeholder).first().click();
  await page.getByPlaceholder(placeholder).first().fill(address);
  await page.getByPlaceholder(placeholder).first().press('Enter');
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(new RegExp(`/accounts/${address}`));

  // Test transaction hash search
  await page.getByPlaceholder(placeholder).first().click();
  await page.getByPlaceholder(placeholder).first().fill(transactionHash);
  await page.getByPlaceholder(placeholder).press('Enter');
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(new RegExp(`/transactions/${transactionHash}`));
});
