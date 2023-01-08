import { expect, Locator, Page, test } from '@playwright/test';

async function clickPopup(page: Page, selector: (p: Page) => Locator) {
  // Test facebook button
  await Promise.all([page.waitForEvent('popup'), selector(page).click()]).then(([popup]) =>
    popup.close()
  );
}

test('footer', async ({ page, isMobile }) => {
  // Test url
  await Promise.all([page.waitForNavigation(), page.goto('.')]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test company footer section
  await clickPopup(page, (p) => p.getByRole('link', { name: 'Forbole' }).first());

  await clickPopup(page, (p) => p.getByRole('link', { name: 'Stake Now' }));

  await clickPopup(page, (p) => p.getByRole('link', { name: 'Contact Us' }));

  await clickPopup(page, (p) => p.getByRole('link', { name: 'Blog' }));

  // Test Big Dipper footer section
  await clickPopup(page, (p) => p.getByRole('link', { name: 'About' }));

  await clickPopup(page, (p) => p.getByRole('link', { name: 'FAQ' }));

  await clickPopup(page, (p) => p.getByRole('link', { name: 'Terms and conditions' }));

  await clickPopup(page, (p) => p.getByRole('link', { name: 'Privacy Policy' }));

  // Test community footer section
  if (!isMobile) {
    await clickPopup(page, (p) => p.getByRole('link', { name: 'Telegram' }));
  }

  await clickPopup(page, (p) => p.getByRole('link', { name: 'LinkedIn' }));

  await clickPopup(page, (p) => p.getByRole('link', { name: 'Twitter' }));

  await clickPopup(page, (p) => p.getByRole('link', { name: 'Github' }));

  // Test donate button in footer section
  await clickPopup(page, (p) => p.getByRole('link', { name: 'Donate' }));
});
