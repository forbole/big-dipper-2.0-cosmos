import { test, expect } from '@playwright/test';

test('validators page', async ({ page }) => {
    await page.goto('https://desmos.bigdipper.live');

    await page.getByRole('link', { name: 'Validators' }).click();
    await expect(page).toHaveURL(/.*validators/);

    await page.getByRole('tab', { name: 'Inactive' }).click();
    await page.getByRole('tab', { name: 'All Validators' }).click();
    await page.getByRole('tab', { name: 'Active' }).click();

    await page.getByPlaceholder('Search Validator').click();
    await page.getByPlaceholder('Search Validator').fill('Apollo');
    await page.getByPlaceholder('Search Validator').press('Enter');
    
    await page.goto(`https://desmos.bigdipper.live/validators/desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq`);
});

