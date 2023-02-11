import { expect, test } from '@playwright/test';

test('index page has wrapper main', async ({ page }) => {
	await page.goto('/');
});
