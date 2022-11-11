import { test, expect } from '@playwright/test';

const deployURL = process.env.DEPLOY_URL ?? "http://localhost:3000";

test('search box', async ({ page }) => {
    // Test url
    await page.goto(deployURL);
    await expect(page).toHaveURL(deployURL);

    // Test validator address search
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').click();
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').fill('desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq');
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').press('Enter');
    await expect(page).toHaveURL(/.*validators\/desmosvaloper17lca9smrdlwkznr92hypzrgsjkelnxeaacgrwq/);

    // Test address search
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').click();
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').fill('desmos17lca9smrdlwkznr92hypzrgsjkelnxear4qhyj');
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').press('Enter');
    await expect(page).toHaveURL(/.*accounts\/desmos17lca9smrdlwkznr92hypzrgsjkelnxear4qhyj/);

    // Test transaction hash search
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').click();
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').fill('705351F036752DA23C43A4F36D184976EA441CDA4CB2DE9A1236223DE9081FE0');
    await page.getByPlaceholder('Search for validator / tx hash / block height / address / @dtag').press('Enter');
    await expect(page).toHaveURL(/.*transactions\/705351F036752DA23C43A4F36D184976EA441CDA4CB2DE9A1236223DE9081FE0/);
});

