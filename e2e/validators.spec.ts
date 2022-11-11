import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";

test('validators list page', async ({ page }) => {
    // Test url
    await page.goto(deployURL);
    await expect(page).toHaveURL(deployURL);

    // Test click validators section
    await page.getByRole('link', { name: 'Validators' }).click();
    await expect(page).toHaveURL(/.*validators/);

    // Test change validators tabs
    await page.getByRole('tab', { name: 'Inactive' }).click();
    await page.getByRole('tab', { name: 'All Validators' }).click();
    await page.getByRole('tab', { name: 'Active' }).click();

    // Test change validators order
    await page.getByRole('button', { name: 'Validator' }).click();
    await page.getByRole('button', { name: 'Voting Power' }).click();
    await page.getByRole('button', { name: 'Commission' }).click();

    // Test search for validator in the list
    await page.getByPlaceholder('Search Validator').click();
    await page.getByPlaceholder('Search Validator').fill('Apollo');
    await page.getByPlaceholder('Search Validator').press('Enter');
    
    // Test single validator url
    await page.goto(`${deployURL}/validators/desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq`);
    await expect(page).toHaveURL(`${deployURL}/validators/desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq`);

});

