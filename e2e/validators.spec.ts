import { test, expect } from '@playwright/test';

test('validators list page', async ({ page }) => {
    await page.goto('https://desmos.bigdipper.live');

    await page.getByRole('link', { name: 'Validators' }).click();
    await expect(page).toHaveURL(/.*validators/);

    await page.getByRole('tab', { name: 'Inactive' }).click();
    await page.getByRole('tab', { name: 'All Validators' }).click();
    await page.getByRole('tab', { name: 'Active' }).click();

    await page.getByRole('button', { name: 'Validator' }).click();
    await page.getByRole('button', { name: 'Voting Power' }).click();
    await page.getByRole('button', { name: 'Commission' }).click();

    await page.getByPlaceholder('Search Validator').click();
    await page.getByPlaceholder('Search Validator').fill('Apollo');
    await page.getByPlaceholder('Search Validator').press('Enter');
    
    await page.goto(`https://desmos.bigdipper.live/validators/desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq`);
    await expect(page).toHaveURL(`https://desmos.bigdipper.live/validators/desmosvaloper134zrg6jn3a5l5jjpzv9eucdlw3nl2qelk0e992`);

});

