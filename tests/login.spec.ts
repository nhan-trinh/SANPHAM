import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('Login Page', () => {
  test('Đăng nhập thành công', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#email', 'test@example.com');
    await page.fill('#password', '123456');
    await page.click('button[type="submit"]');
    await expect(page.locator('.message')).toHaveText('Đăng nhập thành công');
  });

  test('Đăng nhập thất bại', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('#email', 'sai@example.com');
    await page.fill('#password', 'sai123');
    await page.click('button[type="submit"]');
    await expect(page.locator('.message')).toHaveText('Sai thông tin đăng nhập');
  });
});

