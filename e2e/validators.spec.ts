import { test, expect } from '@playwright/test';

const validatorAddress = 'desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq';

test('validators list page', async ({ page, isMobile }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  if (isMobile) await page.getByRole('button', { name: 'open navigation menu' }).first().click();

  // Test click validators section
  await page.getByRole('link', { name: 'Validators' }).first().click();
  await expect(page).toHaveURL(/\/validators/);

  // Test change validators tabs
  await page.getByRole('tab', { name: 'Inactive' }).first().click();
  await page.getByRole('tab', { name: 'All Validators' }).first().click();
  await page.getByRole('tab', { name: 'Active' }).first().click();

  if (!isMobile) {
    // Test change validators order
    await page.getByRole('button', { name: 'Validator' }).first().click();
    await page.getByRole('button', { name: 'Voting Power' }).first().click();
    await page.getByRole('button', { name: 'Commission' }).first().click();
  }

  // Test search for validator in the list
  if (isMobile) {
    await page
      .getByPlaceholder('Search for validator / tx hash / block height / address / @dtag')
      .first()
      .click();
    await page
      .getByPlaceholder('Search for validator / tx hash / block height / address / @dtag')
      .fill('Apollo');
    await page
      .getByPlaceholder('Search for validator / tx hash / block height / address / @dtag')
      .press('Enter');
  } else {
    await page.getByPlaceholder('Search Validator').first().click();
    await page.getByPlaceholder('Search Validator').fill('Apollo');
    await page.getByPlaceholder('Search Validator').press('Enter');
  }

  // Test single validator url
  await page.goto(`./validators/${validatorAddress}`);
  await expect(page).toHaveURL(new RegExp(`/validators/${validatorAddress}`));
});
