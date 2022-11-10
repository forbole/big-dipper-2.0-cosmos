import { test, expect } from '@playwright/test';

test('footer', async ({ page }) => {
    const url = await page.goto('https://cosmos.bigdipper.live/');
    
    // Company footer section 
    const [forbole] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Forbole' }).first().click()
    ]);
    await forbole.waitForLoadState();
    await expect(forbole).toHaveURL("https://www.forbole.com");
    
    const [stakeNow] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Stake Now' }).click()
    ]);
    await stakeNow.waitForLoadState();
    await expect(stakeNow).toHaveURL("https://www.forbole.com");
    
    const [contactUs] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Contact Us' }).click()
    ]);
    await contactUs.waitForLoadState();
    await expect(contactUs).toHaveURL("https://www.forbole.com/contact");

    const [blog] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Blog' }).click()
    ]);
    await blog.waitForLoadState();
    await expect(blog).toHaveURL("https://www.forbole.com/blog");


    // Big Dipper footer section 
    const [about] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'About' }).click()
    ]);
    await about.waitForLoadState();
    await expect(about).toHaveURL("https://bigdipper.live/#about");

    const [faq] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'FAQ' }).click()
    ]);
    await faq.waitForLoadState();
    await expect(faq).toHaveURL("https://bigdipper.live/faq");

    const [termsAndConditions] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Terms and conditions' }).click()
    ]);
    await termsAndConditions.waitForLoadState();
    await expect(termsAndConditions).toHaveURL("https://bigdipper.live/terms-and-conditions");

    const [privacyPolicy] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Privacy Policy' }).click()
    ]);
    await privacyPolicy.waitForLoadState();
    await expect(privacyPolicy).toHaveURL("https://bigdipper.live/privacy-policy");


    // Community footer section 
    const [telegram] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Telegram' }).click()
    ]);
    await expect(telegram).toHaveURL("https://t.me/forbole");

    const [linkedIn] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'LinkedIn' }).click()
    ]);
    await linkedIn.waitForLoadState();
    await expect(linkedIn).toHaveURL(/.*https:\/\/www.linkedin.com\/*/);

    const [twitter] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Twitter' }).click()
    ]);
    await twitter.waitForLoadState();
    await expect(twitter).toHaveURL("https://twitter.com/bigdipperlive");

    const [github] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Github' }).click()
    ]);
    await github.waitForLoadState();
    await expect(github).toHaveURL("https://github.com/forbole");

    
    // Donate footer section
    const [donate] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Donate' }).click()
    ]);
    await donate.waitForLoadState();
    await expect(donate).toHaveURL("https://bigdipper.live/donate");
    
});
