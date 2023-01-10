import { BrowserContext, expect, Locator, Page } from '@playwright/test';

const RESOURCE_EXCLUSTIONS = ['media', 'font', 'other'];

export async function waitForReady(page: Page) {
  await page.waitForSelector('body:visible');
  await expect(page.getByRole('progressbar')).toHaveCount(0);
}

export async function waitForMenuItemClick(selector: string, locator: Locator, isMobile?: boolean) {
  const page = locator.page();
  if (isMobile) {
    await page.getByRole('button', { name: 'open navigation menu' }).first().click();
  }
  await waitForClick(selector, locator, isMobile);
}

export async function waitForClick(selector: string, locator: Locator, isMobile?: boolean) {
  const page = locator.page();
  await Promise.all([
    page.waitForFunction(`!!document.querySelector(${JSON.stringify(selector)})`),
    locator.first().click(),
  ]);
  await waitForReady(page);
}

export async function waitForPopupClick(selector: (p: Page) => Locator, page: Page) {
  // Test facebook button
  await Promise.all([page.waitForEvent('popup'), selector(page).first().click()]).then(([popup]) =>
    popup.close()
  );
}

export async function abortLoadingAssets(page: Page) {
  await page.route('**/*', (route) => {
    if (RESOURCE_EXCLUSTIONS.includes(route.request().resourceType())) {
      route.abort();
    } else {
      route.continue();
    }
  });
}

export async function hasReadPermissions(context: BrowserContext) {
  // Grant read permissions for clipboard
  try {
    // grant permission for chromium
    await context.grantPermissions(['clipboard-read']);
    return true;
  } catch (error) {
    // skip for firefox
    return false;
  }
}
