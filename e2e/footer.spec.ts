import { Locator, Page, expect, test } from '@playwright/test';
import { interceptRoutes, waitForPopupClick, waitForReady } from './common';

async function getHref(locator: Locator) {
  return await (await locator).first().getAttribute('href');
}

test('footer', async ({ page, isMobile }) => {
  await interceptRoutes(page);

  await page.goto('.');
  await waitForReady(page);

  // Test company footer section`
  expect(await getHref(page.getByRole('link', { name: 'Forbole', exact: true }))).toBe(
    'https://www.forbole.com'
  );

  expect(await getHref(page.getByRole('link', { name: 'Stake Now', exact: true }))).toBe(
    'https://www.forbole.com/stake-now'
  );

  expect(await getHref(page.getByRole('link', { name: 'Contact Us', exact: true }))).toBe(
    'https://www.forbole.com/contact'
  );

  expect(await getHref(page.getByRole('link', { name: 'Blog', exact: true }))).toBe(
    'https://www.forbole.com/blog'
  );

  // Test Big Dipper footer section
  expect(await getHref(page.getByRole('link', { name: 'About', exact: true }))).toBe(
    'https://bigdipper.live/#about'
  );

  expect(await getHref(page.getByRole('link', { name: 'FAQ', exact: true }))).toBe(
    'https://bigdipper.live/faq'
  );

  expect(await getHref(page.getByRole('link', { name: 'Terms and conditions', exact: true }))).toBe(
    'https://bigdipper.live/terms-and-conditions'
  );

  expect(await getHref(page.getByRole('link', { name: 'Privacy Policy', exact: true }))).toBe(
    'https://bigdipper.live/privacy-policy'
  );

  expect(await getHref(page.getByRole('link', { name: 'Documentation', exact: true }))).toBe(
    'https://docs.bigdipper.live/'
  );

  // Test community footer section
  expect(await getHref(page.getByRole('link', { name: 'telegram', exact: true }))).toBe(
    'https://t.me/forbole'
  );

  expect(await getHref(page.getByRole('link', { name: 'linkedin', exact: true }))).toBe(
    'https://www.linkedin.com/company/forbole'
  );

  expect(await getHref(page.getByRole('link', { name: 'twitter', exact: true }))).toBe(
    'https://twitter.com/bigdipperlive'
  );

  expect(await getHref(page.getByRole('link', { name: 'github', exact: true }))).toBe(
    'https://github.com/forbole'
  );

  // Test donate button in footer section
  expect(await getHref(page.getByRole('link', { name: 'Donate', exact: true }))).toBe(
    'https://bigdipper.live/donation'
  );
});
