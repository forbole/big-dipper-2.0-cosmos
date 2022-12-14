import { expect, test } from '@playwright/test';

test('footer', async ({ page, isMobile }) => {
  // Test url
  await Promise.all([page.waitForNavigation({ url: /[^?#]*\/\/[^/]+\/$/ }), page.goto('.')]);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test company footer section
  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://www.forbole.com')),
    page.getByRole('link', { name: 'Forbole' }).first().click(),
  ]);

  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://www.forbole.com')),
    page.getByRole('link', { name: 'Stake Now' }).click(),
  ]);

  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://www.forbole.com/contact')),
    page.getByRole('link', { name: 'Contact Us' }).click(),
  ]);

  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://www.forbole.com/blog')),
    page.getByRole('link', { name: 'Blog' }).click(),
  ]);

  // Test Big Dipper footer section
  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://bigdipper.live/#about')),
    page.getByRole('link', { name: 'About' }).click(),
  ]);

  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://bigdipper.live/faq')),
    page.getByRole('link', { name: 'FAQ' }).click(),
  ]);

  await Promise.all([
    page.waitForEvent('popup', (p) =>
      p.url().startsWith('https://bigdipper.live/terms-and-conditions')
    ),
    page.getByRole('link', { name: 'Terms and conditions' }).click(),
  ]);

  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://bigdipper.live/privacy-policy')),
    page.getByRole('link', { name: 'Privacy Policy' }).click(),
  ]);

  // Test community footer section
  if (!isMobile) {
    await Promise.all([
      page.waitForEvent('popup', (p) => p.url().startsWith('https://t.me/forbole')),
      page.getByRole('link', { name: 'Telegram' }).click(),
    ]);
  }

  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://www.linkedin.com')),
    page.getByRole('link', { name: 'LinkedIn' }).click(),
  ]);

  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://twitter.com/bigdipperlive')),
    page.getByRole('link', { name: 'Twitter' }).click(),
  ]);

  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://github.com/forbole')),
    page.getByRole('link', { name: 'Github' }).click(),
  ]);

  // Test donate button in footer section
  await Promise.all([
    page.waitForEvent('popup', (p) => p.url().startsWith('https://bigdipper.live/donate')),
    page.getByRole('link', { name: 'Donate' }).click(),
  ]);
});
