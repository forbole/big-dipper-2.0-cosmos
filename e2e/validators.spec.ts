import { test } from '@playwright/test';
import { interceptRoutes, waitForMenuItemClick, waitForReady } from './common';

const validatorAddress = 'desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq';

test('validators list page', async ({ page, isMobile }) => {
  await interceptRoutes(page);

  await page.goto(`.`);
  await waitForReady(page);

  await waitForMenuItemClick(
    'ul > a.active[href="/validators"]',
    page.getByRole('link', { name: 'Validators' }),
    isMobile
  );

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
      .locator(
        `[placeholder="Search for validator / tx hash / block height / address / @dtag"]:visible`
      )
      .first()
      .click();
    await page
      .locator(
        `[placeholder="Search for validator / tx hash / block height / address / @dtag"]:visible`
      )
      .first()
      .fill('Apollo');
    await page
      .locator(
        `[placeholder="Search for validator / tx hash / block height / address / @dtag"]:visible`
      )
      .first()
      .press('Enter');
  } else {
    await page.locator(`[placeholder="Search Validator"]:visible`).first().click();
    await page.locator(`[placeholder="Search Validator"]:visible`).first().fill('Apollo');
    await page.locator(`[placeholder="Search Validator"]:visible`).first().press('Enter');
  }
});
