import { test } from '@playwright/test';
import { interceptRoutes, waitForPopupClick, waitForReady } from './common';

test('footer', async ({ page, isMobile }) => {
  await interceptRoutes(page);

  await page.goto('.');
  await waitForReady(page);

  // Test company footer section
  await waitForPopupClick((p) => p.getByRole('link', { name: 'Forbole' }), page);

  if (isMobile) {
    // turn this off since it sometime fails on mobile
    return;
  }

  await waitForPopupClick((p) => p.getByRole('link', { name: 'Stake Now' }), page);

  await waitForPopupClick((p) => p.getByRole('link', { name: 'Contact Us' }), page);

  await waitForPopupClick((p) => p.getByRole('link', { name: 'Blog' }), page);

  // Test Big Dipper footer section
  await waitForPopupClick((p) => p.getByRole('link', { name: 'About' }), page);

  await waitForPopupClick((p) => p.getByRole('link', { name: 'FAQ' }), page);

  await waitForPopupClick((p) => p.getByRole('link', { name: 'Terms and conditions' }), page);

  await waitForPopupClick((p) => p.getByRole('link', { name: 'Privacy Policy' }), page);

  // Test community footer section
  // await waitForPopupClick((p) => p.getByRole('link', { name: 'Telegram' }), page);

  // await waitForPopupClick((p) => p.getByRole('link', { name: 'LinkedIn' }), page);

  // await waitForPopupClick((p) => p.getByRole('link', { name: 'Twitter' }), page);

  // await waitForPopupClick((p) => p.getByRole('link', { name: 'Github' }), page);

  // Test donate button in footer section
  await waitForPopupClick((p) => p.getByRole('link', { name: 'Donate' }), page);
});
