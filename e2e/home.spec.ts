import { expect, test } from '@playwright/test';
import { interceptRoutes, waitForClick, waitForMenuItemClick, waitForReady } from './common';

test('home page', async ({ page, isMobile }) => {
  await interceptRoutes(page);

  await page.goto('.');
  await waitForReady(page);

  // Test a title
  await expect(page).toHaveTitle(/Big Dipper/);

  if (!isMobile) {
    // Test language change
    await page.getByRole('button', { name: 'settings-button' }).first().click();
    await page.getByRole('button', { name: 'Save' }).waitFor();
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
  }

  // Test 'See More' blocks button
  await waitForClick(
    'ul > a.active[href="/blocks"]',
    page.getByRole('link', { name: 'see more blocks' }),
    isMobile
  );

  await waitForMenuItemClick(
    'ul > a.active[href="/"]',
    page.getByRole('link', { name: 'Overview' }),
    isMobile
  );

  // Test 'See More' transactions button
  await waitForClick(
    'ul > a.active[href="/transactions"]',
    page.getByRole('link', { name: 'see more txs' }),
    isMobile
  );
});
