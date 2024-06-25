import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
})

test('test', async ({ page }) => {

  await page.locator('input[id="firstName"]').fill('oscar2');
  await page.locator('input[id="lastName"]').fill('rico');
  await page.getByPlaceholder('Mobile Number').fill('3219145165454')
  await page.getByText('Male', { exact: true }).click();
  await page.getByText('Reading').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('te');
  await page.getByText('Computer Science', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Select picture$/ }).nth(1).click();
  await page.locator('#state svg').click();
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('#city svg').click();
  await page.getByText('Lucknow', { exact: true }).click();
  await page.locator('//button[@id="submit"]').click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();


})

test.afterAll(async ({ page }) => {

  await page.close();
})