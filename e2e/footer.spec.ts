import { test, expect } from '@playwright/test';

test('footer', async ({ page }) => {
  // Test url
  await page.goto('.');
  await expect(page).toHaveURL(/[^?#]*\/\/[^/]+\/$/);
  await expect(page.getByRole('progressbar')).toHaveCount(0);

  // Test company footer section
  const [forbole] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Forbole' }).first().click(),
  ]);
  await expect(forbole).toHaveURL('https://www.forbole.com');

  const [stakeNow] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Stake Now' }).click(),
  ]);
  await expect(stakeNow).toHaveURL('https://www.forbole.com');

  const [contactUs] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Contact Us' }).click(),
  ]);
  await expect(contactUs).toHaveURL('https://www.forbole.com/contact');

  const [blog] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Blog' }).click(),
  ]);
  await expect(blog).toHaveURL('https://www.forbole.com/blog');

  // Test Big Dipper footer section
  const [about] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'About' }).click(),
  ]);
  await expect(about).toHaveURL('https://bigdipper.live/#about');

  const [faq] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'FAQ' }).click(),
  ]);
  await expect(faq).toHaveURL('https://bigdipper.live/faq');

  const [termsAndConditions] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Terms and conditions' }).click(),
  ]);
  await expect(termsAndConditions).toHaveURL('https://bigdipper.live/terms-and-conditions');

  const [privacyPolicy] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Privacy Policy' }).click(),
  ]);
  await expect(privacyPolicy).toHaveURL('https://bigdipper.live/privacy-policy');

  // Test community footer section
  const [telegram] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Telegram' }).click(),
  ]);
  await expect(telegram).toHaveURL('https://t.me/forbole');

  const [linkedIn] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'LinkedIn' }).click(),
  ]);
  await expect(linkedIn).toHaveURL(/https:\/\/www\.linkedin\.com/);

  const [twitter] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Twitter' }).click(),
  ]);
  await expect(twitter).toHaveURL('https://twitter.com/bigdipperlive');

  const [github] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Github' }).click(),
  ]);
  await expect(github).toHaveURL('https://github.com/forbole');

  // Test donate button in footer section
  const [donate] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Donate' }).click(),
  ]);
  await expect(donate).toHaveURL('https://bigdipper.live/donate');
});
