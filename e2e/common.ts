import { BrowserContext, expect, Locator, Page } from '@playwright/test';

const RESOURCE_EXCLUSTIONS = ['media', 'font', 'other'];

export async function waitForReady(page: Page) {
  await page.waitForSelector('body:visible');
  // await expect(page.getByRole('progressbar')).toHaveCount(0);
}

export async function waitForMenuItemClick(selector: string, locator: Locator, isMobile?: boolean) {
  const page = locator.page();
  if (isMobile) {
    await page.getByRole('button', { name: 'open navigation menu' }).first().click();
  }
  await waitForClick(selector, locator);
}

export async function waitForClick(selector: string, locator: Locator) {
  const page = locator.page();
  await Promise.all([
    page.waitForFunction(`!!document.querySelector(${JSON.stringify(selector)})`),
    locator.first().click(),
  ]);
  await waitForReady(page);
}

export async function waitForPopupClick(selector: (p: Page) => Locator, page: Page) {
  const popupPromise = page.waitForEvent('popup');
  await selector(page).first().click();
  await popupPromise;
}

export async function interceptRoutes(page: Page) {
  await page.on('popup', (popup) => interceptRoutes(popup));
  await page.route('**/*', (route) => {
    if (RESOURCE_EXCLUSTIONS.includes(route.request().resourceType())) {
      route.abort();
    } else {
      const url = route.request().url();
      if (
        !/^[^/]*\/\/(localhost(|:\d+)|raw\.githubusercontent\.com|gql\..+\.forbole\.com|gql\..+\.desmos\.network)/.test(
          url
        )
      ) {
        route.fulfill({ status: 200, body: url });
      } else {
        route.continue();
      }
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
