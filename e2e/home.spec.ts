import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test click overview
  await page.getByRole('link', { name: 'Overview' }).first().click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test a title
  await expect(page).toHaveTitle(/Big Dipper/);

  // Test language change
  await page.getByRole('button', { name: 'settings-button' }).first().click();
  await page.getByRole('button', { name: 'Save' }).waitFor();
  await page.getByRole('button', { name: 'Save' }).first().click();

  // Test theme change
  await page.getByRole('button', { name: 'settings-button' }).first().click();
  await page.getByRole('button', { name: 'Save' }).waitFor();
  await page.getByRole('button', { name: 'Light' }).first().click();
  await page.getByRole('option', { name: 'Dark' }).first().click();
  await page.getByRole('button', { name: 'Save' }).first().click();

  // Test date format change
  await page.getByRole('button', { name: 'settings-button' }).first().click();
  await page.getByRole('button', { name: 'Save' }).waitFor();
  await page.getByRole('button', { name: 'Locale' }).first().click();
  await page.getByRole('option', { name: 'UTC' }).first().click();
  await page.getByRole('button', { name: 'Save' }).first().click();

  // Test transactions format change
  await page.getByRole('button', { name: 'settings-button' }).first().click();
  await page.getByRole('button', { name: 'Save' }).waitFor();
  await page.getByRole('button', { name: 'Compact' }).first().click();
  await page.getByRole('option', { name: 'Detailed' }).first().click();
  await page.getByRole('button', { name: 'Save' }).first().click();

  // Test 'See More' blocks button
  await page.getByRole('link', { name: 'see more blocks' }).first().click();
  await page.waitForNavigation({ url: /\/blocks/, waitUntil: 'domcontentloaded' });

  await page.getByRole('link', { name: 'Overview' }).first().click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test 'See More' transactions button
  await page.getByRole('link', { name: 'see more txs' }).first().click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/\/transactions/);
});
